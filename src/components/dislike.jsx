const Dislike = ({ artpieces, setArtpieces, dislikedIdeas }) => {
  const toggleJob = () => {
    setArtpieces((currentArtpieces) => {
      const updatedPieces = currentArtpieces.map((art) => {
        if (art.piece === dislikedIdeas) {
          const artToUpdate = { ...art };
          !artToUpdate.dislike
            ? (artToUpdate.dislike = true)
            : (artToUpdate.dislike = false);

          return artToUpdate;
        } else {
          return { ...art };
        }
      });
      return updatedPieces;
    });
  };
  if (
    artpieces[0].piece === "Something new?..." ||
    artpieces[0].piece === "Your first idea..."
  ) {
    return null;
  } else {
    return (
      <button onClick={toggleJob} className="dislike">
        ☄️
      </button>
    );
  }
};

export default Dislike;
