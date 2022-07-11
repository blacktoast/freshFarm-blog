function get(url) {
  // XMLHttpRequest 객체 생성
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  // 서버 응답 시 호출될 이벤트 핸들러
  xhr.onload = () => {
    if (xhr.status === 200) {
      // 정상 응답
      console.log(xhr.response);
      return xhr.response; // ①
    } else {
      console.log('Error: ' + xhr.status);
    }
  };

  // 비동기 방식으로 Request 오픈
  xhr.open('GET', url);
  // Request 전송
}

// 비동기 함수 내의 readystatechange 이벤트 핸들러에서 처리 결과를 반환(①)하면 순서가 보장되지 않는다.
const res = get('http://jsonplaceholder.typicode.com/posts/1');
console.log(res); // ② undefined
get(
  url,
  () => {
    get(
      url,
      () => {
        get(url, () => {});
      },
      func
    );
  },
  func
);
