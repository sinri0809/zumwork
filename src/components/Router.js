/* @jsx h */
function h(type, props={}, ...children){
  return { type, props, children };
}

import Component from "../core/Component";
import Detail from "./Detail";
import Favorite from "./Favorite";
import Posts from './Posts';
import TopPosts from "./TopPosts";


// post-container를 중심으로 routing한 컴포넌트가 보인다.
window.addEventListener('DOMContentLoaded', () => {
  // DOMContentLoaded : 초기 HTML 문서를 완전히 파싱하고 난 뒤
  // 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않습니다. ... MDN
  const navigation = document.querySelector('nav');
  const $afterApp = document.querySelector('.post-container'); // app에다가 자꿈 ㅏㄴ들어ㅣㅏ러미ㅏㄹ
  // 메인
  new TopPosts($afterApp);
  
  navigation.addEventListener('click', (event) => {
    event.preventDefault(); // 새로고침 막기
    $afterApp.innerHTML = '';

    const path = event.target.getAttribute('routeTo'); // path이름 설정하기
    history.pushState(path, null, path); // url설정 및 history관리
    
    routing(path, $afterApp);
  });
});

const routing = (path, $afterApp) => {
  switch (path){
    case 'life': case 'food': case 'travel': case 'culture':
      new Posts($afterApp, path); 
      break;

    case 'favorite':
      new Favorite($afterApp, path);
      // 즐겨찾기 한 card를 볼 수 있다.
      // 즐겨찾기 정보는  loacalstorage로 관리한다???
      break;
    case 'detail':
      // card를 누르면 상세 페이지를 볼 수 있다. 
      new Detail($afterApp, path);
      break;
    default:
      console.log('default 페이지 또는 예상하지 못한 경로로 들어갈 때');
  }
}

class Router extends Component{
  render(){
    this.$target = (
      <section class="post-container">
      </section>
    );
    this.$target = this.createElement(this.$target);
    this.where.appendChild(this.$target);
  }
}

export {Router, routing};