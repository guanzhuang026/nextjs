import { getImageUrl } from "@/lib/utils";

// 先给 person 定义类型（TS 需要）：有 name 和 imageId 两个字段
type Person = {
  name: string;
  imageId: string;
};

// 子组件 Avatar：通过「参数解构」读取父组件传来的 props
// ({ person, size }) 等同于从 props 对象里取出这两个字段
export function Avatar({ person, size }: { person: Person; size: number }) {
  return (
    <img
      className="avatar rounded-full shadow"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
