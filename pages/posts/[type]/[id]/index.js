const Post = (postData) => {
  console.log(postData);

  function createMarkup(content) {
    return { __html: content };
  }

  return (
    <>
      <h1>{postData.title.rendered}</h1>
      <div
        dangerouslySetInnerHTML={createMarkup(postData.content.rendered)}
        className="post-content"
      ></div>
    </>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://elotive.com/wp-json/wp/v2/${query.type}/${query.id}`
  );
  const postData = await res.json();
  return postData;
};

export default Post;
