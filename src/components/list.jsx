import { useEffect } from "react";
import Dislike from "./Dislike";

const List = ({ artpieces, setArtpieces }) => {
  useEffect(() => {
    const retrievedIdeas = localStorage.getItem("art-ideas");
    if (retrievedIdeas) {
      setArtpieces(JSON.parse(retrievedIdeas));
    }
  }, [setArtpieces]);

  return (
    <>
      <section className="idea">
        <ul>
          {artpieces.map((art) => {
            return (
              <li key={art.piece} className={art.dislike ? "checked" : null}>
                <Dislike
                  artpieces={artpieces}
                  setArtpieces={setArtpieces}
                  dislikedIdeas={art.piece}
                />
                {art.piece}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default List;
