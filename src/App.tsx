import React, { useState } from "react";
import "./App.css";
import Memo from "./components/Memo";
import Header from "./components/Header";
import { isEmptyString } from "./hooks/isEmptyString";

const DETAILS_LIMIT = 100;

function App() {
  const [memoText, setMemoText] = useState<string>("");
  const [memoList, setMemoList] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  // useEffect(() => {
  //   if (localStorage.getItem("value")) {
  //     setMemoText(localStorage.getItem("value") as string);
  //   }
  // }, []);

  // useEffect(()=> {
  //   updateLabel()
  // })

  // const updateLabel = () => {
  //   setMemoList(getItem("value"))
  // }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (error) {
      setError("");
    }
    setMemoText(e.target.value);
  };

  const addMemo: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (isEmptyString(memoText)) {
      setError("文字を記入してください！");
      setMemoText("");
      return;
    }

    setMemoList([...memoList, memoText]);
    setMemoText("");
    // localStorage.setItem("value", memoText);
  };

  const removeMemo = (idx: number) => {
    const newMemoTextList = [...memoList];
    newMemoTextList.splice(idx, 1);
    setMemoList(newMemoTextList);
    // localStorage.removeItem("value");
  };

  return (
    <>
      <div className="max-w-4xl flex flex-col mx-auto justify-center items-center">
        <Header />
        <div className="w-[500px] flex flex-col">
          <div className="flex items-center">
            <input
              type="text"
              className="min-w-[500px] border outline-none py-2 px-3 mb-2 mr-2 rounded-md focus:shadow"
              onChange={handleChange}
              value={memoText}
              maxLength={100}
            />
            <span>
              {memoText.length}/{DETAILS_LIMIT}
            </span>
          </div>
          {error && <p className="text-red-700 mb-2">{error}</p>}
          <button
            className=" bg-rose-500 text-white py-2 px-3 rounded-md hover:opacity-90 outline-none"
            onClick={addMemo}
          >
            作成
          </button>
        </div>
        <div className="flex flex-col justify-center text-center">
          <p className="my-3 font-bold">メモ一覧</p>
          <ul>
            {memoList.map((memoText, idx) => (
              <Memo
                memoText={memoText}
                key={idx}
                removeMemo={() => removeMemo(idx)}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
