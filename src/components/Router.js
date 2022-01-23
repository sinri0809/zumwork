/* @jsx h */
function h(type, props={}, ...children){
  return { type, props, children };
}
import Component from "../core/Component";
import Posts from './Posts';

// post-container를 중심으로 routing할 예정
window.addEventListener('DOMContentLoaded', () => {
  // DOMContentLoaded : 초기 HTML 문서를 완전히 파싱하고 난 뒤
  // 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않습니다. ... MDN
  // console.log('DOMContentLoaded!!!!');

  const navigation = document.querySelector('nav');

  const $afterApp = document.querySelector('.post-container'); // app에다가 자꿈 ㅏㄴ들어ㅣㅏ러미ㅏㄹ

  navigation.addEventListener('click', (event) => {
    event.preventDefault(); // 새로고침 막기
    $afterApp.innerHTML = '';

    const path = `/${event.target.getAttribute('routeTo')}`; // path이름 설정하기
    history.pushState(path, null, path); // url설정 및 history관리
    
    // routing(history.state, $afterApp); // history.state가 바뀔때마다 원하는 컴포넌트를 
    switch (path){
      case '/life': case '/food': case '/travel': case '/culture':
        console.log('서브페이지');
        // component는 같은데 data만 다르게
        new Posts($afterApp, path); 
        break;
      case '/favorite':
        console.log("즐겨찾기 페이지");
        // 즐겨찾기 한 card를 볼 수 있다.
        break;
      case '/detail':
        console.log("상세페이지");
        // card를 보면 상세 페이지를 볼 수 있다. 
        break;
      default:
        console.log('default 페이지 또는 예상하지 못한 경로로 들어갈 때');
    }
  });
});

export default class Router extends Component{
  render(){
    this.$target = (
      <div class="post-container">
      </div>
    );
    this.$target = this.createElement(this.$target);
    this.where.appendChild(this.$target);
  }
}