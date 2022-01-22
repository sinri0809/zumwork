/* @jsx h */
function h(type, props={}, ...children){
  return { type, props, children };
}

import Component from "../core/Component";

export default class Header extends Component{
  render(){
    this.$target = (
      <div>
        <mark>
          <a href="#">Home</a>
        </mark>
        <nav>
          <a href="#">Life</a>
          <a href="#">Food</a>
          <a href="#">Travel</a>
          <a href="#">Culture</a>
          <a href="#">Favorite</a>
        </nav>
      </div>
    );
    this.$target = this.createElement(this.$target);
    this.$where.appendChild(this.$target);
  }
}