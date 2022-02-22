const ClearDisliked = ({ setArtpieces }) => {
  const removeDisliked = () => {
    setArtpieces((currArtpieces) => {
      const likedArt = currArtpieces.filter((piece) => piece.dislike === false);
      if (likedArt.length > 0) {
        localStorage.setItem("art-ideas", JSON.stringify([...likedArt]));
        return [...likedArt];
      }
      return [...currArtpieces];
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
