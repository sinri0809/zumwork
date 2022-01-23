/* @jsx h */
function h(type, props={}, ...children){
  return { type, props, children };
}
import Component from "../core/Component";


export default class Posts extends Component{
  // changeState(){
  //   const path = this.path.substr(1); // '/' 때버리기
  //   console.log(path);

  //   const matchCategory = this.state.map((item) => {
  //     if ( item.category == this.path.substr(1) ){
  //       console.log(item.category);
  //       return item;
  //     }else{
  //       return null;
  //     }
  //   });
  //   console.log(this.state);

  // }
  render(){
    // store에서 가져오는 거 구현해야함.
    this.state = [
      {
        "category": "culture",
        "index": 0,
        "title": "참회록",
        "author": "윤동주",
        "date": "1942-1-24",
        "cont": "파란 녹이 낀 구리 거울 속에 내 얼굴이 남아 있는 것은 어느 왕조의 유물이기에 이다지도 욕될까. 나는 나의 참회의 글을 한 줄에 줄이자. ― 만 이십사 년 일 개월을 무슨 기쁨을 바라 살아왔던가. 내일이나 모레나 그 어느 즐거운 날에 나는 또 한 줄의 참회록을 써야 한다. ― 그때 그 젊은 나이에 왜 그런 부끄런 고백을 했던가. 밤이면 밤마다 나의 거울을 손바닥으로 발바닥으로 닦아 보자. 그러면 어느 운석 밑으로 홀로 걸어가는 슬픈 사람의 뒷모양이 거울 속에 나타나 온다.",
        "like": false
      },{
        "category": "travel",
        "index": 1,
        "title": "글 제목",
        "author": "홍길동",
        "date": "2020-11-11",
        "cont": "글 내용",
        "like": false
      },{
        "category": "culture",
        "index": 2,
        "title": "Die Geburt der Tragödie aus dem Geiste der Musik",
        "author": "니체",
        "date": "1872-0-0",
        "cont": "대위법적인 발성술과 귀의 현혹술 아래에는 분노와 파괴욕의 기저음이 으르렁거리고 있지 않는가?”(Brummt nicht ein Grundbass von Zorn und Vernichtungslust unter aller Ihrer contrapunktischen Stimmen-Kunst und Ohren-Verf?hrerei hinweg)",
        "like": true
      },{
        "category": "food",
        "index": 3,
        "title": "요즘 유행하는 로제 떡볶이",
        "author": "먹방",
        "date": "2022-1-1",
        "cont": "로제로제로제로제로제",
        "like": true
      },{
        "category": "life",
        "index": 4,
        "title": "겨울 알뜰하게 보내기",
        "author": "스크루지",
        "date": "2022-2-1",
        "cont": "추우면 따뜻하게 ^^",
        "like": true
      },{
        "category": "life",
        "index": 5,
        "title": "여행가고싶다....",
        "author": "흔한 추억러",
        "date": "2022-1-1",
        "cont": "하이델베르크의 추억",
        "like": false
      },{
        "category": "life",
        "index": 6,
        "title": "마늘장아찌",
        "author": "먹방",
        "date": "2022-1-1",
        "cont": "맛있게 돼라",
        "like": true
      }
    ];

    this.$target = (
      <div class="posts">
        {this.path}
        {
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
        }
      </div>
    );
    this.$target = this.createElement(this.$target);
    this.where.appendChild(this.$target);
  }
}