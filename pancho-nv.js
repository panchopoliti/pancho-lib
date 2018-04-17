#!/usr/bin/env node

const pj = require('./package.json');
const process = require('process');

const { exec } = require('child_process');

const versionNumber = pj.version;
const [mayor, minor, build] = versionNumber.split('.');

const newBuildNumber = parseInt(build) + 1;

pj.version = `${mayor}.${minor}.${newBuildNumber}`;

const commands = [
  `npm run build-babel`,
  `git add ./out`,
  `git add package.json`,
  `git commit --amend --no-edit`,
  `git push origin master`,
  `git tag ${pj.version}`,
  `git push origin ${pj.version}`
];

function executeCommands() {
  exec(commands.join(' && '), (err, stdout, stderr) => {
    if (err) {
      // the *entire* stdout and stderr (buffered)
      console.log(err);
      console.log(`stdout: ${stdout}`);
      console.log(`stdout: ${stdout}`);
      // node couldn't execute the command
      process.exit(1);
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

    console.log(`${pj.version} deployed to the server!`);
    process.exit(0);
  });
}


// fs.writeFile('package.json', json, 'utf8', executeCommands);
