import { getImageUrl } from "@/lib/utils";

// ===== 从 Gallery 里"提取"出来的组件 =====
// 原来两段 <section className="profile"> 几乎一样，只是数据不同。
// 现在把它们收成 Profile，差异部分通过 props 传入：
//   name       姓名（h2 文本）
//   imageId    图片 id（拼 URL 用）
//   profession 职业
//   awards     奖项数组（注意：props 可以是数组这种任意 JS 值）
//   discovered 发现
function Profile({
  name,
  imageId,
  profession,
  awards,
  discovered,
}: {
  name: string;
  imageId: string;
  profession: string;
  awards: string[];
  discovered: string;
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl({ imageId })}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

// ===== 父组件 Gallery：不再重复写两套标签，调用两次 Profile 即可 =====
export default function Gallery() {
  return (
    <div className="p-8">
      <h1>Notable Scientists</h1>

      <Profile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="physicist and chemist"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discovered="polonium (chemical element)"
      />

      <Profile
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="geochemist"
        awards={[
          "Miyake Prize for geochemistry",
          "Tanaka Prize",
        ]}
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
