const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  // polyfill : 최신 문법 해석
  entry: ["@babel/polyfill", './src/index.js'],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.bundle.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: './src/index.js'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    proxy: { // proxy설정하기
      "/api": "http://localhost:8081",
    },
    port: 8081,
    open: true,
    onBeforeSetupMiddleware: (devServer) => { //ability to execute custom middleware after all other middleware internally within the server.
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      // data.json 불러오기
      // local변수로 관리하기
      // express server.js???? 
      const posts = {
        "contents":[
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
            "like": false
          },{
            "category": "food",
            "index": 3,
            "title": "요즘 유행하는 로제 떡볶이",
            "author": "먹방",
            "date": "2022-1-1",
            "cont": "로제로제로제로제로제",
            "like": false
          }
        ]
      
      };


      // data.json 가져오기
      devServer.app.get('/api/posts', (req, res) => {
        res.json(posts);
      });
    },
  }
};