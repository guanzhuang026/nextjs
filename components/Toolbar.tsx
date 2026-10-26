"use client";

import type { ReactNode } from "react";

// 通用 Button：只管"长相"，不管"行为"。
// 它把收到的 onClick prop 原样转交给浏览器内置的 <button>——
// 点击时 React 会调用这个传进来的函数。
function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
    >
      {children}
    </button>
  );
}

// PlayButton：自己决定"播放什么"，
// 把内部的 handlePlayClick 作为 onClick prop 传给 Button。
function PlayButton({ movieName }: { movieName: string }) {
  function handlePlayClick() {
    alert(`正在播放 ${movieName}！`);
  }
  return <Button onClick={handlePlayClick}>播放 "{movieName}"</Button>;
}

// UploadButton：直接把箭头函数作为 onClick 传下去。
function UploadButton() {
  return <Button onClick={() => alert("正在上传！")}>上传图片</Button>;
}

// Toolbar：把两个具体按钮摆在一起。
export default function Toolbar() {
  return (
    <div className="space-x-4">
      <PlayButton movieName="魔女宅急便" />
      <UploadButton />
    </div>
  );
}
