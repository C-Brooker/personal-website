import AboutMeNav from "../layout/AboutMeNav";
import { useState, useEffect, useRef } from "react";
// import DataAssigner from "../containers/BlogPostList";
import BlogPostList from "../BlogPostFunctionality.js/BlogPostList";
import TitleBanner from "../banners/TitleBanner";
import Footer from "../layout/Footer";

import { whichPage, numbersOnButtons } from "../utility/pagination.js";

function BlogDisplay() {
  //useState hook sets the initial state in the component as an empty array
  const [blogPosts, setBlogPosts] = useState([]);
  const blogList = Object.values(blogPosts).reverse();
  const initial = blogList.slice(0, 4);
  //set which page will display for blog posts
  const [showPosts, setShowPosts] = useState([]);
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
    setShowPosts(blogList);
  }
  //with an empty dependency array, every time the page renders,
  //the get request (fetch) is called and the state of the BlogDisplay component
  //gets updated with the response (through the setBlogPosts array)
  useEffect(() => {
    dataExtractor();
  }, []);

  const buttons = numbersOnButtons(blogList, 3);

  const clickHandler = (e) => {
    const buttonValue = parseInt(e.target.id);
    const postsToShow = whichPage(buttonValue, 4, blogList);
    setShowPosts(postsToShow);
  };
  return (
    <div>
      <TitleBanner>blogDisplay</TitleBanner>
      <hr />
      <AboutMeNav />
      <hr />
      <BlogPostList blogposts={showPosts == ![] ? initial : showPosts} />
      <hr />
      <div>
        <ul>
          {buttons.slice(1).map((button) => {
            return (
              <div>
                <button
                  id={`${button}`}
                  onClick={(button) => clickHandler(button)}
                >
                  {button}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default BlogDisplay;
