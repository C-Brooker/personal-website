import BlogCard from "../cards/BlogCard";

function BlogPostList(props) {
  const { blogposts, ...arr } = props;
  //Takes in blogposts as a parameter from BlogDisplay page

  return (
    <ul>
      {/* <Buttonfunctionality buttons={numOfPosts} /> */}
      {/* Takes in blogposts and performs a logical operation using {}
      Maps all of the items of the array to the DataItems function *like looping through the array
      assigns the values of each object to the reference that they will be used as in the DataItems function */}
      {props.blogposts.map((blogpost) => {
        return (
          <li key={blogpost.key}>
            <BlogCard
              title={blogpost.title}
              url={blogpost.image}
              content={blogpost.content}
              time={blogpost.time}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default BlogPostList;
