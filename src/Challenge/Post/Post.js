import style from "./Post.module.css";

export default function Post() {
  return (
    <div className={style.box}>
      <h2> This is the post Title</h2>
      <hr />
      <p>This is the post body</p>
    </div>
  );
}
