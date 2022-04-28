const Pagination = (props) => {
  const { paginate, articlesPerPage, articles } = props;
  const pageNumbers = [];
  for (let i = 1; i < articles / articlesPerPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <ul className="pagination">
        {pageNumbers.map((number, index) => {
          return (
            <li
              key={index}
              onClick={(e) => {
                paginate(Number(e.target.textContent));
              }}
            >
              {number}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Pagination;
