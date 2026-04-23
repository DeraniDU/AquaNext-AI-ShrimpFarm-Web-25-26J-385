#!/usr/bin/env node

import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function loadEnvIfPossible(filePath) {
  const loader = process.loadEnvFile;
  if (typeof loader === "function" && existsSync(filePath)) {
    loader(filePath);
  }
}

function normalizeBucket(rawBucket) {
  if (!rawBucket) return "";
  let bucket = rawBucket.trim();
  bucket = bucket.replace(/^arn:aws:s3:::/, "");
  bucket = bucket.replace(/^s3:\/\//, "");
  bucket = bucket.replace(/\/+$/, "");
  return bucket;
}

loadEnvIfPossible(".env");
loadEnvIfPossible(".env.local");

const bucket = normalizeBucket(process.env.S3_BUCKET || process.env.AWS_S3_BUCKET || "");
if (!bucket) {
  console.error("Missing required environment variable: S3_BUCKET (or AWS_S3_BUCKET)");
  process.exit(1);
}
if (bucket.includes("/")) {
  console.error(`Invalid bucket value "${bucket}". Use only the bucket name, not a path.`);
  process.exit(1);
}

const s3Target = `s3://${bucket}`;

console.log(`Deploying static site to ${s3Target}`);
console.log("Step 1/2: Building...");
run("npm", ["run", "build"]);

if (!existsSync("out")) {
  console.error('Build folder "out" not found. Check `next.config.ts` has `output: "export"`.');
  process.exit(1);
}

console.log("Step 2/2: Uploading to S3...");
run("aws", ["s3", "sync", "out", s3Target, "--delete"]);

console.log("Deploy complete.");
