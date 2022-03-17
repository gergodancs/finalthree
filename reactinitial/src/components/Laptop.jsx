import React from "react";
import { useState } from "react";

const Laptop = ({ name, weight, brand, inp }) => {
  const [more, setMore] = useState(true);
  return (
    <div className="laptops">
      <h2>
        {inp === ""
          ? name
          : inp === name[0] || inp === name[1] || inp === name[2]
          ? name
          : null}
      </h2>
      {!more ? (
        <div>
          <h4>{weight}</h4>
          <h4>{brand}</h4>
        </div>
      ) : null}
      <button onClick={() => setMore(!more)}>
        {more ? "Show more" : "show less"}
      </button>
    </div>
  );
};

export default Laptop;
