import './style/style.scss';

const app = () => {
  const div = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerHTML = '버튼';
  btn.onclick = console.log("clicked");

  div.appendChild(btn);
  return div;
}

document.body.append(app());