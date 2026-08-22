/**
 * Fetch and optimize the homepage product demo video from Supabase.
 * Outputs: public/videos/rust-cheats-demo.mp4 + poster WebP.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import sharp from 'sharp';

const exec = promisify(execFile);
const SOURCE_URL =
	process.env.RUST_DEMO_VIDEO_URL ??
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/rust/rust%20clip.mp4';

const tmpDir = path.resolve('tmp/demo-video');
const sourcePath = path.join(tmpDir, 'source.mp4');
const posterPng = path.join(tmpDir, 'poster.png');
const videoOut = path.resolve('public/videos/rust-cheats-demo.mp4');
const posterOut = path.resolve('public/images/rust-cheats-demo-poster.webp');

await mkdir(tmpDir, { recursive: true });
await mkdir(path.dirname(videoOut), { recursive: true });

console.log('Downloading demo video…');
const res = await fetch(SOURCE_URL, {
	headers: { 'User-Agent': 'Mozilla/5.0 (compatible; RustCheatsSite/1.0)' },
});
if (!res.ok) throw new Error(`Download failed: HTTP ${res.status}`);
await writeFile(sourcePath, Buffer.from(await res.arrayBuffer()));

console.log('Encoding web MP4 (1280w, faststart)…');
await exec('ffmpeg', [
	'-y',
	'-i',
	sourcePath,
	'-vf',
	'scale=1280:-2',
	'-c:v',
	'libx264',
	'-crf',
	'27',
	'-preset',
	'medium',
	'-movflags',
	'+faststart',
	'-an',
	videoOut,
]);

console.log('Extracting poster frame…');
await exec('ffmpeg', [
	'-y',
	'-i',
	sourcePath,
	'-ss',
	'00:00:01.5',
	'-vframes',
	'1',
	posterPng,
]);

await sharp(posterPng).webp({ quality: 82 }).toFile(posterOut);

console.log(`Done — ${videoOut} + ${posterOut}`);
