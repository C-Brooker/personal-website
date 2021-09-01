const ScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div>
      <button onClick={ScrollToTop} />
    </div>
  );
};

export default ScrollToTop;
