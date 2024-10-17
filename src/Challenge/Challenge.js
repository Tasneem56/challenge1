import List from "./List/List";
import Post from "./Post/Post";

export default function Challenge() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}>
      <div style={{ display: "flex", width: "60%" }}>
        <div
          style={{
            width: "70%",
          }}>
          <Post />
          {/* <Post
            title="Title1"
            content="Enim consectetur fugiat irure nostrud proident quis amet qui officia."
          />
          <Post
            title="Title2"
            content="Pariatur proident ex ullamco excepteur Lorem et."
          />
          <Post
            title="Title3"
            content="Ullamco incididunt qui veniam id aliqua veniam sit sit quis ad."
          /> */}
        </div>
        <div
          style={{
            width: "30%",
          }}>
          <List />
        </div>
      </div>
    </div>
  );
}
