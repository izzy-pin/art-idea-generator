const Clear = ({ setArtpieces }) => {
  const removeArt = () => {
    setArtpieces(() => {
      return [{ piece: "Something new?..." }];
    });
  };
  return (
    <>
      <button onClick={removeArt} className="createOrClear">
        {" "}
        Clear
      </button>
    </>
  );
};

export default Clear;
