const Header = ({ bgSrc }) => {
  return (
    <header className={bgSrc.nasa ? "Nasa__header" : null}>
      <h1>An idea that exists only in this generator</h1>
      <p className="intro">
        An art concept / short text generator inspired by{" "}
        <a href="http://katiepaterson.org/" target="_blank" rel="noreferrer">
          Katie Paterson's
        </a>{" "}
        book{" "}
        <a
          href="http://katiepaterson.org/portfolio/place_that_exists/"
          target="_blank"
          rel="noreferrer"
        >
          'A place that exists only in moonlight'
        </a>{" "}
        exploring the themes of deep time, matter, space and ecology
      </p>
    </header>
  );
};

export default Header;
