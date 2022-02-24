const Footer = ({ bgSrc }) => {
  return (
    <footer className={bgSrc.nasa ? "Nasa__footer" : null}>
      <p className="footer__p">
        app by{" "}
        <a href="https://github.com/izzy-pin" target="_blank" rel="noreferrer">
          izzy pinder
        </a>
        , looking to spark an idea
      </p>
      <p className="footer__p">
        background{" "}
        {!bgSrc.nasa ? (
          <>
            by{" "}
            <a
              href="https://www.pexels.com/@eberhardgross"
              target="_blank"
              rel="noreferrer"
            >
              {bgSrc.source}
            </a>
          </>
        ) : (
          <>
            {" "}
            is {bgSrc.source} from Nasa's{" "}
            <a href="https://api.nasa.gov/" target="_blank" rel="noreferrer">
              Astronomy Picture of the Day API{" "}
            </a>
          </>
        )}
      </p>
    </footer>
  );
};

export default Footer;
