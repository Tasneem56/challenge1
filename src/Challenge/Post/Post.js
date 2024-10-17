import style from "./Post.module.css";

export default function Post() {
  const posts = [
    {
      id: 1,
      title: "Title1",
      content:
        "Enim consectetur fugiat irure nostrud proident quis amet qui officia.",
    },
    {
      id: 2,
      title: "Title2",
      content: "Pariatur proident ex ullamco excepteur Lorem et.",
    },
    {
      id: 3,
      title: "Title3",
      content:
        "Ullamco incididunt qui veniam id aliqua veniam sit sit quis ad.",
    },
  ];
  const postsList = posts.map((post) => {
    return (
      <div key={posts.id} className={style.box}>
        <h2>{post.title}</h2>
        <hr />
        <p> {post.content}</p>
      </div>
    );
  });
  return <div>{postsList}</div>;
}
