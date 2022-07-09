setTimeout(() => {
  console.log('time1');
}, 0);

window.requestAnimationFrame(() => {
  console.log('animation');
});

setTimeout(() => {
  console.log('time2');
}, 0);

Promise.resolve().then(function () {
  console.log('promise1');
});
