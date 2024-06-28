#!/usr/bin/env node
/* eslint-disable no-console */

// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const  { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.log(`Failed to execute ${command}`);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/mahamodulhasanmoon/rapid-expresskit ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log('Downloading boilerplate...');
const checkout = runCommand(gitCheckoutCommand);
if (!checkout) process.exit(-1);

console.log('Installing dependencies...');
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(-1);

console.log('Congratulations! You are ready to start.');
console.log(`cd ${repoName} && npm start`);
