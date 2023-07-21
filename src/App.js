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

  蜊壼｣ｫ縲ゅ≠縺ｪ縺溘?縺帙＞縺ｧ荳也阜縺ｯ縺翫°縺励￥縺ｪ縺｣縺溘?ゅ◎繧後↑縺ｮ縺ｫ譛ｪ縺?縲√≠縺ｪ縺溘?鄂ｪ繧帝㍾縺ｭ繧医≧縺ｨ縺励※縺?ｋ縲ゅ◎繧後′菴輔ｒ諢丞袖縺吶ｋ縺ｮ縺九?√≠縺ｪ縺溘?逅?ｧ｣縺励※縺?↑縺??
縺ゅ↑縺溘?莠ｺ髢薙←繧ゅ′豕｣縺榊将縺ｶ蟋ｿ繧定ｦ九※菴輔ｒ諢溘§縺溘?縺九?ゆｽ輔ｒ諤昴▲縺溘?縺九?
遘√?縺ゅ↑縺溘↓蜊泌鴨縺励ｈ縺??ゅ◎繧後′縺ゅ↑縺溘↓縺ｨ縺｣縺ｦ濶ｯ縺阪％縺ｨ縺ｪ繧峨?


  ... ___ ...
  .... .._ _. __. . ._.
  ... ___ ...
  .... .._ _. __. . ._.
  ... ___ ...
  .... .._ _. __. . ._.
  ... ___ ...
  .... .._ _. __. . ._.
  ... ___ ...
  .... .._ _. __. . ._.
  ... ___ ...
  .... .._ _. __. . ._.

  ... ___ ...

  ... ___ ...








  ... ___ ...

  .
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
