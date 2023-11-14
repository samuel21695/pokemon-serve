/**
 * settimeout 실행방법
 * 1. settimeout delay 2개로 만들어서 1번은 delay 0초로 설정 2번은 delay 5초 설정
 * 2. event.emiiter 사용
 * 3. add eventListen(load) 사용
 * 4. Node On 기능 사용
 */

setTimeout(function() {
  console.log('hi')
}, 50);
