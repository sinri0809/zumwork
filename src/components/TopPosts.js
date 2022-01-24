/* @jsx h */
function h(type, props={}, ...children){
  return { type, props, children };
}

import Component from "../core/Component";
import { selector } from "../store/store";
import { routing } from './Router';


export default class TopPosts extends Component{
  miniWindow;
  organizePosts(){
    this.state = selector();
    const categories = [...this.state.category];
    const contents = [...this.state.contents];
    let topContents = [];

    // 각 카테고리별로 처음 나오는 것만 가져가기
    for(let cate of categories){
      const result = contents.filter((item)=> {
        if(item.category === cate){
          return item
        }
      });
      topContents.push(result[0]);
    }
    return topContents;
  }
  btnDetail(){
    const postCard = document.querySelector('.cards');
    const $afterApp = document.querySelector('.post-container'); // app에다가 자꿈 ㅏㄴ들어ㅣㅏ러미ㅏㄹ

    postCard.addEventListener('click', (event) => {

    // event.target.getAttribute('card') // index 순서가 들어가있음.
      $afterApp.innerHTML = '';

      const path = 'detail' // path이름 설정하기
      history.pushState(path, null, path);
      
      routing(path, $afterApp);
    });
  }
  render(){
    const topConts = this.organizePosts();
    const topRealTime = this.state.contents.slice(0, 12);

    this.$target = (
    <div class="top-post">
      <h2>Top 4</h2>
      <div class="--top cards">
        {
          topConts.map(({category, index, title, author, date, cont, like})=> {
            const liked = like?"liked! 🎇":"did't liked";
            return(<button class="post-card" card={index}>
              <h5>{category}</h5>
              <span>{liked}</span>
              <span>{title}</span>
              <span>{author}</span>
              <p>{cont}</p>
            </button>)
          })
        }
      </div>

      <h3>실시간 Top 12</h3>
      <ol class="--bottom">
        {
          topRealTime.map(({title, author})=> {
            return(<li>
              <h5>{title}</h5>
              <p>{author}</p>
            </li>)
          })
        }
      </ol>
    </div>
    );
    this.$target = this.createElement(this.$target);
    this.where.appendChild(this.$target);
    this.btnDetail();

  }
}