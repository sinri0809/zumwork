/* @jsx h */
function h(type, props={}, ...children){
  return { type, props, children };
}
import Header from "./Header";
import TopPosts from "./TopPosts";
import Router from "./Router";

const App = () => {
  const $app = document.querySelector(`.app`);
  history.pushState('/app', null, '/'); // path 초기화
  // 메인 페이지
  new Header($app);
  new TopPosts($app);
  
  new Router($app); // 초기에 $app에다가 하니까 논리적으로 안맞아서 새롭게 routing할 공간을 만들었다.
}

export default App;