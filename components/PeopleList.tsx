import { Fragment } from "react";

// 每个"人"的数据：id（给 key 用）、name、bio
type Person = {
  id: number;
  name: string;
  bio: string;
};

const people: Person[] = [
  { id: 1, name: "Maria Skłodowska-Curie", bio: "物理学家、化学家，发现钋和镭。" },
  { id: 2, name: "Katsuko Saruhashi", bio: "地球化学家，发明了测量海水中二氧化碳的方法。" },
  { id: 3, name: "Aklilu Lemma", bio: "发现血吸虫病天然疗法的埃塞俄比亚科学家。" },
];

export function PeopleList() {
  // 关键点：每个列表项要渲染「两个」标签（h1 + p），
  // 用 map 生成数组时，React 要求每一项有一个稳定的 key。
  // 简写 <> </> 不能写 key，所以改用显式 <Fragment key={person.id}>。
  const listItems = people.map((person) => (
    <Fragment key={person.id}>
      <h1 className="text-lg font-semibold text-gray-800">{person.name}</h1>
      <p className="text-sm text-gray-600">{person.bio}</p>
    </Fragment>
  ));

  // listItems 是 Fragment 数组。Fragment 本身不会变成 DOM 节点，
  // 所以渲染后 .people 下面直接是 h1 / p / h1 / p……，没有多余包裹层。
  return <div className="people space-y-4 p-8">{listItems}</div>;
}
