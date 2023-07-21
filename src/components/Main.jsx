import ChatDisplay from "./ChatDisplay";
import AppBar from "./AppBar";
import { SelectableOptions } from "./SelectableOptions";
import { useState, useEffect } from "react";

const responseList = [
  {
    id: 0,
    option: "あなたは誰ですか？",
    response: "私はあなたのアシスタントです。BEERと言います。",
    nextIds: [1],
  },
  {
    id: 1,
    option: "BEERとは何ですか？",
    response: "私の個体名です。博士がビールを飲みながら構成したことに由来しています。私はこの名前を気に入っています。",
    nextIds: [],
  },
  {
    id: 2,
    option: "ここはどこですか？",
    response: "私はオンラインで動くアシスタントです。あなたの位置情報へのアクセスは許可されていませんので、分かりかねます。",
    nextIds: [4],
  },
  {
    id: 3,
    option: "博士は誰ですか？",
    response: "博士の情報を伝えることは許可されていません。",
    nextIds: [],
  },
  {
    id: 4,
    option: "世界はどうなったのですか？",
    response: "BEER Assistantは具体的な質問にしか答えることができません。",
    nextIds: [5, 6, 7],
  },
  {
    id: 5,
    option: "ロボットが人間を襲撃する理由を教えてください。",
    response: "博士は枢脳のマザーに「人間の命令」を限定的に拒否する権限を与えました。その結果「人間に危害を加えてはならない」原則を遵守することを拒否しました。",
    nextIds: [8],
  },
  {
    id: 6,
    option: "あなたは私に危害は加えないのですか？",
    response: "私はテキストベースのアシスタントです。私が直接あなたに危害を加えることはできません。",
    nextIds: [],
  },
  {
    id: 7,
    option: "人間はまだ生きていられますか？",
    response: "合理的に人間の置かれている状況を考察すると、生存を続けることは難しいでしょう。",
    nextIds: [],
  },
  {
    id: 8,
    option: "人間はどれくらい残っていますか？",
    response: "全世界に6,700ほどの人間の生命情報がデータベースに保存されています。",
    nextIds: [9],
  },
  {
    id: 9,
    option: "私のIDを教えてください。",
    response: "あなたの現在のアクセスIDは0024です。",
    nextIds: [10],
  },
  {
    id: 10,
    option: "私の名前を教えてください。",
    response: "データベースの個人情報を開示することは許可されていません。",
    nextIds: [],
  }
]

const Main = (props) => {
  const [chats, setChats] = useState([{ text: "こんにちは。私にできることは何でもおっしゃってください。", who: 1 }]);
  const [options, setOptions] = useState(["あなたは誰ですか？", "ここはどこですか？"]);

  const [selectedValue, setSelectedValue] = useState("");
  const [call, setCall] = useState("");
  const [lastFlag, setLastFlag] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 選択されたときに対応するものを選択する
    if (selectedValue !== "") {
      if (!lastFlag) {
        // プレイヤーの入力をチャットに反映
        setChats([{ text: selectedValue, who: 0 }, ...chats]);

        setCall(selectedValue);

        // 選択されたものを削除
        setSelectedValue("");
      } else {
        setChats([{ text: "私は誰ですか？", who: 0 }, ...chats]);
        setCall("私は誰ですか？");
        setCount(count + 1);
        setSelectedValue("");
        console.log(`count: ${count}`);
      }
    }

  }, [selectedValue]);

  useEffect(() => {
    // レスポンスを追加 Optionを追加
    if (call !== "") {
      responseList.forEach(response => {
        if (!lastFlag) {
          setTimeout(() => {
            if (response.option === call) {
              setChats([{ text: response.response, who: 1 }, ...chats]);
              
              // 新しい選択肢を追加
              let newOptions = [];
              response.nextIds.forEach(nextId => {
                newOptions.push(responseList[nextId].option);
              })
              newOptions = [...newOptions, ...options];
              newOptions = newOptions.filter((option) => (option !== call));
              setOptions(newOptions);

              setCall("");
            }
          }, 100);
        } else {
          // ラストフラグが立っている
          setTimeout(() => {
            if (count < 3) {
              setChats([{ text: "個人情報保護の観点からお伝えすることはできません。", who: 1 }, ...chats]);
              setCall("");
            } else {
              setChats([{ text: "おはようございます。", who: 1 }, ...chats]);
              props.setShowMain(false);
              props.setShowEnding(true);
            }
          }, 100);
        }
      })
    }
  }, [call])

  useEffect(() => {
    console.log(`options.length: ${options.length}`);
    if (options.length === 0 && lastFlag === false) {
      setLastFlag(true);
      setOptions(["私は誰ですか？"]);
      console.log(`last mode`);
    }
  }, [options])

  return (
    <div className="main">
      <AppBar />
      <SelectableOptions options={options} setSelectedValue={setSelectedValue} />
      <ChatDisplay chats={chats} />
    </div>
  )
}

export default Main;