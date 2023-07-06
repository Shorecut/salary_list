import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const SectonList = ({ item }) => {
  const [inputVal, setInputVal] = useState(0);
  const [inputVal2, setInputVal2] = useState(0);

  return (
    <div style={{ width: "1000px", margin: "0 auto", marginTop: "30px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Days</th>
            <th>Salary Per Day</th>
            <th>Total Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>
              <input
                onChange={(e) => {
                  setInputVal(e.target.value);
                }}
                value={inputVal}
              />
            </td>
            <td>
              <input
                onChange={(e) => {
                  setInputVal2(e.target.value);
                }}
                value={inputVal2}
              />
            </td>
            <td>{inputVal * inputVal2}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default SectonList;
