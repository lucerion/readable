const { generateSecret } = require('./secret');

const generate = (args) => {
  const [command, ..._commandArgs] = args;

  switch(command) {
  case 'secret':
    generateSecret();
    break;
  default:
    console.error(`Command '${command}' not found`);
  }
};

const commandWithArgs = process.argv.slice(2);
generate(commandWithArgs);
