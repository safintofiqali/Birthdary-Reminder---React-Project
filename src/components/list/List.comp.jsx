const List = (props) => {
  const { birthdays } = props;
  return (
    <>
      {birthdays.map(({ id, name, age, image }) => {
        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default List;
