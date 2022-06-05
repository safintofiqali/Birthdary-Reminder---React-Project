import { useState } from "react";
import birthdaysData from "./data";
import "./App.css";
import List from "./components/list/List.comp";

const App = () => {
  const clearAllBirthdays = () => {
    setBirthdays([]);
    setAction("Load Birthdays");
  };

  const addBirthdays = () => {
    setBirthdays(birthdaysData);
    setAction("Clear All");
  };

  const [birthdays, setBirthdays] = useState(birthdaysData);
  const [action, setAction] = useState("Clear All");

  return (
    <main>
      <section className="container">
        <h3>{birthdays.length} Birthdays today</h3>
        <List birthdays={birthdays} />
        <button
          onClick={action === "Clear All" ? clearAllBirthdays : addBirthdays}
        >
          {action}
        </button>
      </section>
    </main>
  );
};

export default App;
