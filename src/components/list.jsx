const List = ({ artpieces }) => {
  return (
    <>
      <section className="idea">
        <ul>
          {artpieces.map((art) => {
            return <li key={art}>{art}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default List;
