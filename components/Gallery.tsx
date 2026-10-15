// 教程第三节（进阶）：一个 Profile 组件，通过 props 渲染多个不同的科学家。
//
// 写法变了：从「硬编码的 3 个相同的 Profile」改成「1 个 Profile 组件 + 3 次不同调用」，
// 这就是 React 的核心：组件 = 可复用的函数 + 用 props 传入不同数据。
//
// 反例（不要这么写）：复制粘贴出 Profile1 / Profile2 / Profile3，
// 各自硬编码图片和名字 —— 改样式要改 3 处。
//
// 关键语法：
//   - function Profile(props)  ：组件就是一个普通函数，参数叫 props
//   - src={props.image}        ：JSX 里用 {} 把 props 的值"塞进"标签属性
//   - <Profile image="..." name="..." />  ：调用组件时把数据当作"标签属性"传进去
//
// 导出方式：
//   - Profile 用「具名导出」export function Profile —— 别的文件可 import { Profile } 单独拿来用
//   - Gallery 用「默认导出」export default function Gallery —— 别的文件可 import Gallery 直接用
//   两者可以共存：一个文件既默认导出一个主角，又具名导出若干零件。

// Profile 具名导出：接收一个 props 对象 { image, name }，渲染对应的图片
export function Profile(props: { image: string; name: string }) {
  return (
    <img
      className="h-48 w-48 rounded object-cover shadow"
      src={props.image}
      alt={props.name}
    />
  );
}

// 默认导出：供其他文件 import 使用
export default function Gallery() {
  return (
    <section className="flex flex-wrap items-center gap-4">
      <h1 className="w-full text-2xl font-bold">了不起的科学家</h1>
      {/* 同一个组件，写一次，用 3 次，每次传不同的 props → 3 个不同的人 */}
      <Profile
        image="https://react.dev/images/docs/scientists/QIrZWGIs.jpg"
        name="Alan L. Hart"
      />
      <Profile
        image="https://react.dev/images/docs/scientists/jA8hHMpm.jpg"
        name="Katsuko Saruhashi"
      />
      <Profile
        image="https://react.dev/images/docs/scientists/MK3eW3Am.jpg"
        name="Katherine Johnson"
      />
    </section>
  );
}
