const ClearDisliked = ({ setArtpieces }) => {
  const removeDisliked = () => {
    setArtpieces((currArtpieces) => {
      const likedArt = currArtpieces.filter((piece) => piece.dislike === false);
      console.log(likedArt);
      return [...likedArt];
    });
  };
  return (
    <>
      <button onClick={removeDisliked} className="createOrClear">
        {" "}
        Clear disliked
      </button>
    </>
  );
};

export default ClearDisliked;
