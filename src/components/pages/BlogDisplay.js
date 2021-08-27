import AboutMeNav from "../layout/AboutMeNav";
import BlogCard from "../cards/BlogCard";
import { useState, useEffect } from "react";

function BlogDisplay() {
  //useState hook sets the initial state in the component as an empty array
  const [blogPosts, setBlogPosts] = useState([]);

  //function to perform fetch request
  async function dataExtractor() {
    //wait for the response from the database and store response in blogData variable
    const blogData = await fetch(
      "https://my-personal-website-e872c-default-rtdb.firebaseio.com/blog/posts.json"
    );

    //wait to transfer the response to JSON format and then store it in data variable
    const data = await blogData.json();

    //update the state of the component with the new database data
    setBlogPosts(data);
  }

  //with an empty dependency array, every time the page renders,
  //the get request (fetch) is called and the state of the BlogDisplay component
  //gets updated with the response (through the setBlogPosts array)
  useEffect(() => {
    dataExtractor();
  }, []);

  return (
    <div>
      <div>blogDisplay</div>
      <AboutMeNav />
      <BlogCard />
    </div>
  );
}

export default BlogDisplay;
