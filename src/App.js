import { useEffect, useState } from "react";
import birthdaysData from "./data";
import "./App.css";
import List from "./components/list/List.comp";
import Pagination from "./components/pagination/Pagination.comp";

const App = () => {
  const clearAllBirthdays = () => {
    setBirthdays([]);
  };

  const changePageNumber = (pageNumber) => {
    setPage(pageNumber);
  };

  const [birthdays, setBirthdays] = useState(birthdaysData);
  const [page, setPage] = useState(1);
  const articlePerPage = 3;
  const indexOfLastItem = page * articlePerPage;
  const indexOfFirstItem = indexOfLastItem - articlePerPage;

  useEffect(() => {
    let birthdaysArray = birthdaysData.slice(indexOfFirstItem, indexOfLastItem);
    setBirthdays(birthdaysArray);
  }, [page]);

  return (
    <main>
      <section className="container">
        <h3>{birthdays.length} Birthdays today</h3>
        <List birthdays={birthdays} />
        <Pagination
          paginate={changePageNumber}
          articlesPerPage={articlePerPage}
          articles={birthdaysData.length}
        />
        <button onClick={clearAllBirthdays}>Clear All</button>
      </section>
    </main>
  );
};

export default App;
