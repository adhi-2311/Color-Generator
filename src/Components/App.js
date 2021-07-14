import React, { useState } from "react";
import SingleColor from "./SingleColor";
import "../styles.css";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  function handleChange(event) {
    setColor(event.target.value);
  }

  return (
    <div>
      <section className="container">
        <h3>Generate your Palete</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={handleChange}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
