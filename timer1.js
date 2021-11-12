let input = process.argv.slice(2).sort();

const timer = function(times) {
  for (let time of times) {
    if (Number(time) && time > 0) {
      setTimeout(() => console.log(`beep at ${time} seconds`), time * 1000);
    }
  }
};

timer(input);