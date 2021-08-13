const args = process.argv;
let setAlarms = args.slice(2);

const timer = function(setAlarms) {
  for (let i = 0; i < setAlarms.length; i++) {
    if (setAlarms[i] < 0) {
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, setAlarms[i] * 1000);
    }
  }
};

timer(setAlarms);