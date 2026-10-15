// 对应教程里的 App.js：从 Gallery 组件文件里“默认导入” Gallery，再渲染它。
//
// 教程写的是 import Gallery from './Gallery.js'（原生 ES 模块写法，带 .js 后缀）；
// 在 Next.js + TypeScript 里我们习惯用路径别名 @/components/Gallery，不写后缀，
// TS 会自动解析。两者效果一样。
import Gallery from "@/components/Gallery";

// 这个页面就是教程里的“根组件 App”，由 Next 渲染。
export default function GalleryPage() {
  return (
    <main className="p-10">
      <Gallery />
    </main>
  );
}
