/* @jsx h */
function h(type, props={}, ...children){
  return { type, props, children };
}
import Header from "./Header";
import { getData } from "../store/test";
import TopPosts from "./TopPosts";
import Posts from "./Posts";


const App = ($root) => {
  const className = 'app';
  $root.innerHTML = `<div class=${className}></div>`;
  const $app = document.querySelector(`.${className}`);
  // const header = new Header($app);
  new Header($app);
  new TopPosts($app);
  new Posts($app);

}

export default App;