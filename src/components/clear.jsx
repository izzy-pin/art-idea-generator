const Clear = ({ setArtpieces }) => {
  const removeArt = () => {
    setArtpieces(() => {
      return ["Something new?..."];
    });
  };
  return (
    <>
      <button onClick={removeArt}> Clear</button>
    </>
  );
};

export default Clear;
