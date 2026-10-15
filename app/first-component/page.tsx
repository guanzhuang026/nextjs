import PageLayout from "@/components/PageLayout";
import NavigationHeader from "@/components/NavigationHeader";
import Sidebar from "@/components/Sidebar";
import PageContent from "@/components/PageContent";
import TableOfContents from "@/components/TableOfContents";
import DocumentationText from "@/components/DocumentationText";

// 这一页把上面这些组件「嵌套组合」起来，对应教程里的那段结构：
// <PageLayout>
//   <NavigationHeader />
//   <Sidebar />
//   <PageContent>
//     <TableOfContents />
//     <DocumentationText />
//   </PageContent>
// </PageLayout>
export default function FirstComponentPage() {
  return (
    <PageLayout>
      <NavigationHeader />
      <div className="flex">
        <Sidebar />
        <PageContent>
          <TableOfContents />
          <DocumentationText />
        </PageContent>
      </div>
    </PageLayout>
  );
}
