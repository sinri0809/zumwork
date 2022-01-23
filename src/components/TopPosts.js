/* @jsx h */
function h(type, props={}, ...children){
  return { type, props, children };
}

import Component from "../core/Component";
import { getPosts } from "../store/test";


export default class TopPosts extends Component{
  // constructor($where){
  //   super();
  //   this.$where = $where;
  //   console.log($where);
  // }
  render(){
    // store에서 가져오는 거 구현해야함.
    this.state = {};
    this.$target = (
      <div class="top-post">
        "각 항목의 상위 4개 컨텐츠 노출"
        {/* {
          this.state.map(({category, index, title, author, date, cont, like})=> {
            const liked = like?"liked! 🎇":"did't liked";
            return(<div class="post-card">
              <h5>{category}</h5>
              <p>{liked}</p>
              <p>{title}</p>
              <p>{author}</p>
              <p>{cont}</p>
            </div>)
          })
        } */}
        <div class="top-post-zwolf">
          <h3>실시간 top 12</h3>
          "순위, 제목 매체사"
        </div>
      </div>
    );
    this.$target = this.createElement(this.$target);
    this.$where.appendChild(this.$target);
  }
}