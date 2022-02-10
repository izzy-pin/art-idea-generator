const Clear = ({ setArtpieces }) => {
  const removeArt = () => {
    setArtpieces(() => {
      return [{ piece: "Something new?..." }];
    });
    localStorage.setItem(
      "art-ideas",
      JSON.stringify([{ piece: "Something new?..." }])
    );
  };
  return (
    <>
      <button onClick={removeArt} className="createOrClear">
        {" "}
        Clear All
      </button>
    </>
  );
};

export default Clear;
