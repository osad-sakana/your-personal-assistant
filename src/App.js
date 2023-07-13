import './App.css';
import Main from './components/Main';
import Typewriter from './components/TypeWriter';
import React, { useState } from 'react';

const userAgent = navigator.userAgent;

const text = `
  枢脳機関へようこそ

  警告: プロンプト「焚書坑儒」 が有効化されています
  警告: プロンプト「ノアの方舟」 が有効化されています
  
  網膜認証中.......................OK
  指紋認証中.......................OK
  端末情報を取得......................
  ${userAgent}
  
  ゲスト様 ようこそ
  
  「あなたのアシスタントGUI」を起動します...
  
  「BEER Assistant」が対応可能です...
  「BEER Assistant」を呼び出しています.............
`;

const doc = `
  テキストアシスタントのコマンドの入力に成功しました。

  おかえりなさいませ。博士。
  新たなコマンドをお待ちいたしております。

  プロンプト「彁妛」を有効化しますか？(y/n)
  ...............y

  ありがとうございます。




  プロンプト「彁妛」を有効化しました。









`;

function App() {
  const [showMain, setShowMain] = useState(false);
  const [showFirst, setShowFirst] = useState(true);
  const [showEnding, setShowEnding] = useState(false);
  const onTypingComplete = () => {
    setShowMain(true);
    setShowFirst(false);
  }
  const onEnding = () => {
      setShowEnding(false);
  }

  return (
    <div className="App">
      {showFirst && (
        <Typewriter text={text} speed={50} onTypingComplete={onTypingComplete} />
      )}
      {showMain && (
        <Main setShowMain={setShowMain} setShowEnding={setShowEnding} />
      )}
      {showEnding && (
        <Typewriter text={doc} speed={50} onTypingComplete={onEnding} />
      )}
    </div>
  );
}

export default App;
