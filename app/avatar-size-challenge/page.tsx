// 本挑战自包含：教程的 utils.js 的 getImageUrl 和 Avatar 都放这页里，
// 避免改动项目共用的 lib/utils.ts（那里 getImageUrl 只收一个对象参数）。

// 教程版 getImageUrl：第二个参数 size 是 's'(小) 或 'b'(大)，拼进文件名
function getImageUrl(person: { imageId: string }, size: string) {
  return `https://react.dev/images/docs/scientists/${person.imageId}${size}.jpg`;
}

// 挑战要改的就是这个 Avatar：根据 size prop 选 's' 还是 'b'
function Avatar({
  person,
  size,
}: {
  person: { name: string; imageId: string };
  size: number;
}) {
  // ★ 核心改动：size < 90 用小图('s')，否则用大图('b')
  const thumbnail = size < 90 ? "s" : "b";
  return (
    <img
      className="avatar rounded-full shadow"
      src={getImageUrl(person, thumbnail)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function AvatarSizeChallenge() {
  const person = { name: "Gregorio Y. Zara", imageId: "7vQD0fP" };
  return (
    <main className="mx-auto max-w-3xl space-y-6 p-8">
      <h1 className="text-2xl font-bold text-gray-800">
        挑战 2：根据 size prop 选择图片尺寸
      </h1>
      <p className="text-sm text-gray-500">
        同一个 person，传不同 size：小于 90 就用小图 &apos;s&apos;，否则用大图 &apos;b&apos;。
        右键图片"在新标签页打开"可看到实际请求的 URL 不同。
      </p>

      <div className="flex items-end gap-6">
        <figure className="text-center">
          <Avatar person={person} size={40} />
          <figcaption className="mt-2 text-xs text-gray-600">size=40 → &apos;s&apos;</figcaption>
        </figure>
        <figure className="text-center">
          <Avatar person={person} size={90} />
          <figcaption className="mt-2 text-xs text-gray-600">size=90 → &apos;b&apos;</figcaption>
        </figure>
        <figure className="text-center">
          <Avatar person={person} size={160} />
          <figcaption className="mt-2 text-xs text-gray-600">size=160 → &apos;b&apos;</figcaption>
        </figure>
      </div>
    </main>
  );
}
