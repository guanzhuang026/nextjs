// 条件渲染示例：用「提前 return」根据 status 决定渲染哪套 UI
export default function QuizForm({ status = "empty" }: { status?: string }) {
  if (status === "success") {
    return <h1>That's right!</h1>;
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable
        water?
      </p>
      <form>
        <textarea />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
