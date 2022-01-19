/* @jsx h */
function h(type, props={}, ...children){
  return { type, props, children };
}

class Component{
  $where // 렌더링할 위치
  $target; // 렌더링하고싶은 dom
  state; // 데이터
  constructor($where){
    this.$where = $where;
    this.state = {num: 0}; // 데이터 initializing
    this.render();
  }

  createElement(node) {
    if (typeof node === 'string'|| typeof node == 'number'){
      return document.createTextNode(node);
    }
    const { type, props, children} = node;
    // Tag 
    const $element = document.createElement(type);
    // Attribute
    Object.keys(props).map((attr)=> {
      if(typeof props[attr] === "string"){
        $element.setAttribute(attr, props[attr]);
      }else{
        $element.setAttribute(attr, undefined);
      }
    });
    // Children
    children.map((child)=> {
      if(Array.isArray(child)){
        child.forEach((ch)=>{
          $element.appendChild(this.createElement(ch));
        })
      }else{
        $element.appendChild(this.createElement(child));
      }
    });
    
    return $element;
  }
  
  setState(newData){
    this.state = {...this.state, ...newData}; // 데이터 바꾸고나면
    this.render(); // 렌더링
  }

  eventHandler(){
    const h1 = document.querySelector("h1");
    h1.addEventListener('click', () => {
      this.setState({num:4})
    })
  }

  render(){
    this.$where.innerHTML = ''; // 계속 dom이 추가 된다.

    this.$target = (
      <div>
        <h1>hello</h1>
        <p>{this.state.num}</p>
      </div>
    );
    
    this.$target = this.createElement(this.$target); // html이 읽을 수 있는 형태로 바꿔주기 (object)
    // console.log(typeof this.$target); // object

    this.$where.appendChild(this.$target); // 이렇게 하면 target이 정의될때마다 추가(append)해버린다.
    
    this.eventHandler(); // event 추가 event함수는 클래스마다 다르게 정의해아한다. 
  }
}

class Temp extends Component{
  constructor($temp){
    super();
    console.log($temp);
    this.state = {
      num1: 1,
      num2: 3,
      sum: 0,
      lst: ["hi", "hello"]
    };

    this.$target = (
      <ul class="list">
        <div>숫자1: {this.state.num1}</div>
        <div>숫자2: {this.state.num2}</div>
        <div>= {this.state.sum}</div>
        <div class="button-set">
          <button class="event-plus">더하기</button>
          <button class="event-minus">빼기</button>
        </div>
      </ul>
    );
    this.render();
  }
    
  // eventHandler(){
  //   const buttonPlus = this.$targetDOM.querySelector('.event-plus');
  //   buttonPlus.addEventListener('click', (event)=>{
  //     const newSum = this.state.num1 + this.state.num2;
  //     this.setState({sum: newSum});
  //     // console.log(event.target); //<button>....
  //   })
  // }
  render(){
    const dom = this.createElement(this.$target);
    // this.$temp.innerHTML = `<h1>dd</h1>`;
    // this.$temp.appendChild(test);

  }
}


const App = ($root) => {
  const className = 'app';
  $root.innerHTML = `<div class=${className}></div>`;
  const $app = document.querySelector(`.${className}`);
  new Component($app)
}

export default App;