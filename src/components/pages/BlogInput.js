import GeneralNav from "../layout/GeneralNav";
import BlogInputCard from "../cards/BlogInputCard";
import styles from "./styles.module.css";

function BlogInput(props) {
  return (
    <div>
      <BlogInputCard />
      <div>
        <GeneralNav />
      </div>
    </div>
  );
}

export default BlogInput;
