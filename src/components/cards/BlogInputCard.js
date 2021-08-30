import { useRef, useState } from "react"; //useRef allows you to reference inputs
import { useHistory } from "react-router-dom"; //useHistory controls the link
import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.css";

function BlogInputCard() {
  const [entered, setEntered] = useState({
    mainTitle: true,
    mainImage: true,
    mainContent: true,
  });
  //Calling and Storing these functions to use them
  const history = useHistory();
  const titleEntered = useRef();
  const imageEntered = useRef();
  const contentEntered = useRef();

  //async function will contain functions that take time
  async function SubmitHandler(event) {
    //Prevents the page being reloaded after submitting
    event.preventDefault();
    //Takes in the current value in the form and stores it as a variable
    const mainTitle = titleEntered.current.value;
    const mainImage = imageEntered.current.value;
    const mainContent = contentEntered.current.value;

    //check there are no null values

    if (!mainTitle) {
      console.log("No main title");
      setEntered({
        ...entered,
        mainTitle: false,
      });
      return;
    }

    if (!mainImage) {
      console.log("No main image");
      setEntered({
        ...entered,
        mainImage: false,
      });
      return;
    }

    if (!mainContent) {
      console.log("No content");
      setEntered({
        ...entered,
        mainContent: false,
      });
      return;
    }
    setEntered({
      mainTitle: true,
      mainImage: true,
      mainContent: true,
    });
    //Create unique key for each post
    const key = uuidv4();

    //Create a new instance of the data class
    const date = new Date();

    const postDate = {
      hour: date.getHours(),
      minutes: date.getMinutes(),
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };

    const blogEntry = {
      key: key,
      title: mainTitle,
      image: mainImage,
      content: mainContent,
      time: formatDate(postDate),
    };

    function formatDate(date) {
      const { minutes, hour, day, month, year } = postDate;
      return `Posted at ${hour}:${minutes} on ${day}/${month}/${year}`;
    }
    //Fetch communicates with the database
    await fetch(
      "https://my-personal-website-e872c-default-rtdb.firebaseio.com/blog/posts.json",
      {
        //Tells the server what to do with the database, the methods are: POST, GET, PUT, PATCH, DELETE
        method: "POST",
        body: JSON.stringify(blogEntry),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    history.push("/");
  }

  return (
    <form className={styles.blogInputCard}>
      <h1>Blog Input Form</h1>
      <div className={styles.blogLabel}>
        <label htmlFor="Title">Title of Blog</label>
        <div>
          <input
            required
            className={
              entered.mainTitle ? styles.blogInput : styles.blogInputError
            }
            type="text"
            name="Title"
            id="Title"
            ref={titleEntered}
          />
        </div>
      </div>
      <div className={styles.blogLabel}>
        <label htmlFor="Image">Image of Blog</label>
        <div>
          <input
            required
            className={
              entered.mainImage ? styles.blogInput : styles.blogInputError
            }
            type="url"
            name="Image"
            id="Image"
            ref={imageEntered}
          />
        </div>
      </div>
      <div className={styles.blogLabel}>
        <label htmlFor="Blog">Content of Blog</label>
        <div>
          <textarea
            required
            className={
              entered.mainContent ? styles.blogInput : styles.blogInputError
            }
            id="Blog"
            rows="15"
            ref={contentEntered}
          />
        </div>
      </div>
      <div>
        <button className={styles.Btn} onClick={SubmitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default BlogInputCard;
