import Dislike from "./dislike";

const List = ({ artpieces, setArtpieces }) => {
  return (
    <>
      <section className="idea">
        <ul>
          {artpieces.map((art) => {
            return (
              <>
                <li key={art.piece} className={art.dislike ? "checked" : null}>
                  {art.piece}
                  <Dislike
                    artpieces={artpieces}
                    setArtpieces={setArtpieces}
                    dislikedIdeas={art.piece}
                  />
                </li>{" "}
              </>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default List;
