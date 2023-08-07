import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory()
  const [studetns] = useState([
    { id: 0, title: "student" },
    { id: 1, title: "mentor" },
    { id: 2, title: "actor" },
    { id: 3, title: "pilot" },
    { id: 4, title: "cooker" },
    { id: 5, title: "saler" },
    { id: 6, title: "cleaner" },
    { id: 7, title: "builder" },
  ]);
  const [ selected ] = useState({})
  // const [selected, setSelected] = useState({});
  return (
    <div style={{ display: "flex" }}>
      <div>
        {studetns.map((value) => {
          return (
            <h1>
              {value.id}
              {value.title}
              <button onClick={() => history.push(`/contact/:${value.id}`)}>
                Select
              </button>
              {/* <button onClick={() => setSelected(value)}>Select</button> */}
            </h1>
          );
        })}
      </div>
      <div>
        <h1>Selected Employees</h1>
        <h1>
          {selected.id} {selected.title}
        </h1>
      </div>
    </div>
  );
};

export default Contact;
