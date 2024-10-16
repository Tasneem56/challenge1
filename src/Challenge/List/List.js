import style from "./List.module.css";

export default function List() {
  return (
    <div>
      <div className={style.box}>
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
      </div>
    </div>
  );
}

function Btn() {
  return <button className={style.bttn}> Button </button>;
}
