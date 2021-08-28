function BlogCard(props) {
  const { time, ...rest } = props;
  return (
    <div>
      <div>
        <img src={props.url} alt={props.title} />
      </div>
      <div>{props.title}</div>
      <div>{props.content}</div>
      <div>{props.time}</div>
    </div>
  );
}

export default BlogCard;
