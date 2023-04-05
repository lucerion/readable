const { generateSecret } = require('./secret');

const executeTask = (args) => {
  const [task, ..._taskArgs] = args;

  switch(task) {
  case 'secret':
    generateSecret();
    break;
  default:
    console.error('Task not found');
  }
};

const taskWithArgs = process.argv.slice(2);
executeTask(taskWithArgs);
