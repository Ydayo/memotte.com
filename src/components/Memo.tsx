import React from "react";

interface MemoProps {
  memoText: string;
  key: number;
  removeMemo: () => void;
}

const Memo: React.FC<MemoProps> = (props) => {
  return (
    <li className="shadow border max-w-xl min-w-[500px] mb-2 p-3 flex flex-wrap break-words">
      <p className="mb-2 text-left w-full">{props.memoText}</p>
      <div className="w-full flex justify-end">
        <button
          onClick={props.removeMemo}
          className="w-[70px] text-center bg-red-700 text-white py-2 rounded-md hover:opacity-90 outline-none"
        >
          削除
        </button>
      </div>
    </li>
  );
};

export default Memo;
