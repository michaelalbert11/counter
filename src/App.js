import Counter from "./components/Counter/Counter.component";
// import Todo from "./components/Todo/Todo.component";
import React, { useState } from "react";
export const contextTheme = React.createContext();
const App = () => {
  const [theme, setTheme] = useState("red");
  return (
    <contextTheme.Provider value={{ backgroundColor: theme }}>
      <Counter intialCount={0} />
      <button
        onClick={() => {
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          });
          console.log(theme);
        }}
      >
        Change theme
      </button>
    </contextTheme.Provider>
  );
};

export default App;
