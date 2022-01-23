/* @jsx h */
function h(type, props={}, ...children){
  return { type, props, children };
}

import Component from "../core/Component";

export default class Header extends Component{
  render(){
    this.$target = (
      <div class="header">
        <div class="header-nav">
          <mark>
            <a href="/">새로고침</a>
          </mark>
          <nav>
            <a routeTo="life" href="/life">Life</a>
            <a routeTo="food" href="/food">Food</a>
            <a routeTo="travel" href="/travel">Travel</a>
            <a routeTo="culture" href="/culture">Culture</a>
            <a routeTo="favorite" href="/favorite">Favorite</a>
          </nav>
        </div>
        <div class="header-search">
          <button>초기화</button>
          <form>
            <input type="text" placeholder="검색하세요" />
            <input type="submit" value="검색" />
          </form>
        </div>
      </div>
    );
    this.$target = this.createElement(this.$target);
    this.$where.appendChild(this.$target);
    this.eventHandler();
  }
}