import style from "./Post.module.css";

export default function Post({ title, content }) {
  return (
    <div className={style.box}>
      <h2> {title}</h2>
      <hr />
      <p>{content}</p>
    </div>
  );
}
