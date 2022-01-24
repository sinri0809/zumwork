/* @jsx h */
function h(type, props={}, ...children){
  return { type, props, children };
}

import Component from "../core/Component";

export default class Detail extends Component{
  render(){
    this.$target = (
    <div class="post">
      detail
    </div>
    );
    this.$target = this.createElement(this.$target);
    this.where.appendChild(this.$target);
  }
}