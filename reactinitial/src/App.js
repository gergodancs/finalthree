import React, { useEffect, useState } from "react";
import Laptop from "./components/Laptop";
import LoadingMask from "./components/LoadingMask";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [inp, setInp] = useState("");

  useEffect(() => {
    fetch("https://demoapi.com/api/laptop")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        return setLoading(false);
      });
  }, []);

  const sorted = () => {
    data && data.sort((a, b) => a.weight - b.weight);
  };

  // data && console.log(data);

  // console.log(inp);

  return (
    <div className="container">
      <span>Sort by weight</span>
      <button onClick={() => sorted()}>Sort</button>
      <input onChange={(e) => setInp(e.target.value)} value={inp} type="text" />
      {loading ? (
        <LoadingMask />
      ) : (
        data.map((item, index) => {
          return (
            <Laptop
              key={index}
              name={item.name}
              brand={item.brand}
              weight={item.weigth}
              inp={inp}
            />
          );
        })
      )}
    </div>
  );
};

export default App;
