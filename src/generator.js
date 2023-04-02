const { crypto } = require('./utils');

const generateSecret = () => {
  const hash = crypto.hash();
  console.warn(hash);
};

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

generate(process.argv.slice(2));
