import { useRef } from "react"; //useRef allows you to reference inputs
import { useHistory } from "react-router-dom"; //useHistory controls the link
import { v4 as uuidv4 } from "uuid";

function BlogInputCard() {
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
    <form>
      <div>
        <label htmlFor="Title">Title of Blog:</label>
        <input
          type="text"
          name="Title"
          required
          id="Title"
          ref={titleEntered}
        />
      </div>
      <div>
        <label htmlFor="Image">Image of Blog</label>
        <input type="url" name="Image" required id="Image" ref={imageEntered} />
      </div>
      <div>
        <label htmlFor="Blog">Content of Blog</label>
        <textarea id="Blog" required rows="5" ref={contentEntered} />
      </div>
      <div>
        <button onClick={SubmitHandler}>Submit</button>
      </div>
    </form>
  );
}

export default BlogInputCard;
