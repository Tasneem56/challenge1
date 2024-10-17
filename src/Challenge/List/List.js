import style from "./List.module.css";

export default function List() {
  const btn = [
    { id: 1, content: "✨✨ تسنيم" },
    { id: 2, content: " جديدة" },
    {
      id: 3,
      content: "🎀 مميزة",
      img: (
        <div>
          <img style={{ width: "100%" }} src="/imgs/flower.jpg" />
        </div>
      ),
    },
  ];
  const btnList = btn.map((btn) => {
    return (
      <button className={style.bttn} key={btn.id}>
        {btn.content}
        {btn.img}
      </button>
    );
  });
  return (
    <div className={`${style.box}`}>
      <div> {btnList}</div>
    </div>
  );
}

// function Btn({ content, children }) {
//   return (
//     <button className={style.bttn}>
//       {content}
//       {children}
//     </button>
//   );
// }
