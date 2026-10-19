// 根据 person.imageId 拼出 react.dev 上的完整图片 URL
// 教程里叫 utils.js，这里改成 TS，并给参数标了类型。
export function getImageUrl(person: { imageId: string }) {
  return (
    "https://react.dev/images/docs/scientists/" +
    person.imageId +
    ".jpg"
  );
}
