import SculptureGallery from "@/components/SculptureGallery";

// 简单页面：只渲染修好的 <SculptureGallery />。点 Next 会切换雕塑。
export default function GalleryDemoPage() {
  return (
    <main className="mx-auto max-w-lg p-8 text-center">
      <h1 className="mb-6 text-xl font-bold text-gray-800 dark:text-gray-100">
        useState 修复版 SculptureGallery
      </h1>
      <SculptureGallery />
    </main>
  );
}
