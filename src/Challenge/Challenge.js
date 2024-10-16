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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
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
