// 雕塑数据（对应教程的 ./data.js，这里用 TS 写法并内联几张占位图）
export type Sculpture = {
  name: string;
  artist: string;
  description: string;
  url: string;
  alt: string;
};

export const sculptureList: Sculpture[] = [
  {
    name: "思想者",
    artist: "罗丹",
    description: "一座陷入沉思的人像雕塑。",
    url: "https://picsum.photos/seed/s1/200",
    alt: "思想者雕像",
  },
  {
    name: "大卫",
    artist: "米开朗基罗",
    description: "文艺复兴时期的经典大理石像。",
    url: "https://picsum.photos/seed/s2/200",
    alt: "大卫雕像",
  },
  {
    name: "维纳斯",
    artist: "作者未知",
    description: "著名的断臂女神像。",
    url: "https://picsum.photos/seed/s3/200",
    alt: "维纳斯雕像",
  },
];
