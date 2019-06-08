const formatDate = timeInSecond => {
    const time = {
        seconds: 0,
        minutes: 0,
        hours: 0,
    };
    !isFinite(timeInSecond) ? timeInSecond = 0 : timeInSecond;
    timeInSecond = Number(timeInSecond);
    let answer = '';
      if (timeInSecond >= 60 && timeInSecond < 3600) {
          time.minutes = Math.floor(timeInSecond / 60);
          time.seconds = timeInSecond - time.minutes * 60;
    } else if (timeInSecond >= 3600) {
          time.hours = Math.floor(timeInSecond / 3600);
          let rest = timeInSecond - time.hours * 3600;
          if (rest >= 60) {
              time.minutes = Math.floor(rest / 60);
              time.seconds = rest - time.minutes * 60;
          } else {
              time.seconds = rest;
          }
    } else {
          time.seconds = timeInSecond;
    }
      console.log(`${time.hours}h:${time.minutes}m:${time.seconds}s`);
    time.hours > 0 ? answer = time.hours + 'h' : answer;
    time.minutes > 0 ? answer = answer + ' ' + time.minutes + 'm' : answer;
    time.seconds > 0 ? answer = answer + ' ' + time.seconds + 's' : answer;
    time.seconds === 0 && time.minutes === 0 && time.hours === 0 ? answer = time.seconds + 's' : answer;
    answer = answer.trim();
    return answer;
};

module.exports = formatDate;
