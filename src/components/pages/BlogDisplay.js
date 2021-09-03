import AboutMeNav from "../layout/AboutMeNav";
import { useState, useEffect } from "react";
import BlogPostList from "../BlogPostFunctionality.js/BlogPostList";
import BlogTitleBanner from "../banners/BlogTitleBanner";
import Footer from "../layout/Footer";
import { whichPage, numbersOnButtons } from "../utility/pagination.js";
import ScrollToTop from "../layout/Scroller";
import styles from "./styles.module.css";
import BlogContainer from "../containers/BlogContainer";

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
    document.title = "My Personal Website";
  }, []);

  const buttons = numbersOnButtons(blogList, 3);

  const clickHandler = (e) => {
    const buttonValue = parseInt(e.target.id);
    const postsToShow = whichPage(buttonValue, 4, blogList);
    setShowPosts(postsToShow);
  };
  return (
    <div>
      <BlogTitleBanner>My Blog</BlogTitleBanner>
      <AboutMeNav />
      <div>
        <BlogContainer>
          <BlogPostList blogposts={showPosts == ![] ? initial : showPosts} />
          <div>
            <ul className={styles.blogBtnList}>
              {buttons.slice(1).map((button) => {
                return (
                  <li key={button}>
                    <div>
                      <button
                        className={styles.blogDisplayBtn}
                        id={`${button}`}
                        onClick={(button) => clickHandler(button)}
                      >
                        {button}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </BlogContainer>
      </div>
      <div className={styles.blogFooter}>
        <Footer />
      </div>
      <div className={styles.hidden}>
        <ScrollToTop />
      </div>
    </div>
  );
}

export default BlogDisplay;
