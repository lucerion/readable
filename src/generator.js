const { crypto } = require('./utils');

const generateSecret = () => {
  const hash = crypto.hash();
  console.log(hash); // eslint-disable-line no-console
};

const generate = (args) => {
  const [command] = args;

  switch(command) {
  case 'secret':
    generateSecret();
    break;
  default:
    console.log(`Command ${command} not found`); // eslint-disable-line no-console
  }
};

generate(process.argv.slice(2));
