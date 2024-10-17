import style from "./List.module.css";

export default function List() {
  return (
    <div>
      <div className={style.box}>
        <Btn content="✨✨ تسنيم" />
        <Btn content="جديدة"></Btn>
        <Btn content=" 🎀 مميزة">
          <div>
            <img
              src="/imgs/flower.jpg"
              style={{
                width: "100%",
              }}
            />
          </div>
        </Btn>
      </div>
    </div>
  );
}

function Btn({ content, children }) {
  return (
    <button className={style.bttn}>
      {content}
      {children}
    </button>
  );
}
