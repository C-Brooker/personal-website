function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <a href="https://www.linkedin.com/in/charlie-brooker-081b241b0/">
        <img
          src="https://image.flaticon.com/icons/png/128/145/145807.png"
          alt="LinkedIn"
        />
      </a>
      <button onClick={scrollToTop} />
    </div>
  );
}

export default Footer;
