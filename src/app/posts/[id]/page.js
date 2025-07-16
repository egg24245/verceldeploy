export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const firstFivePosts = posts.slice(0, 5);

  return (
    <div>
      <h1>Post List</h1>
      {firstFivePosts.map((post) => (
        <div key={post.id}>
          <h1>Post {post.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <h3>Post {post.id}</h3>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
