/* @jsx h */
function h(type, props={}, ...children){
  return { type, props, children };
}
import Header from "./Header";
import TopPosts from "./TopPosts";
import Posts from "./Posts";

import './../core/routing'; // 라우팅




const App = ($root) => {
  const $app = document.querySelector(`.app`);
  history.pushState('/app', null, '/'); // path 초기화
  // main
  new Header($app);
  new TopPosts($app);

  //routing
}

export default App;