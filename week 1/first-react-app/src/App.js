import logo from "./logo.svg";
import "./App.css";
import { Table } from "./component/Table";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!nameInput || nameInput.trim() === "") {
      alert("Please enter a valid name.");
      return;
    }
    if (!priceInput || priceInput < 0) {
      alert("Please enter a valid Price.");
      return;
    }

    if (!descInput || nameInput.trim() === "") {
      alert("Please enter a valid Description.");
      return;
    }

    setData([
      ...data,
      {
        id: data.length + 1,
        productName: nameInput,
        price: priceInput,
        desc: descInput,
      },
    ]);

    setNameInput("");
    setPriceInput("");
    setDescInput("");
  };

  const handleDelete = (id) => {
    setData((prevData) => {
      const filteredData = prevData.filter((item) => item.id !== id);

      const updatedData = filteredData.map((item, index) => ({
        ...item,
        id: index + 1,
      }));

      return updatedData;
    });
  };

  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
      </div>
      <div className="form-container">
        <h3>Enter Product Data:</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-row">
            <label>Product Name:</label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Product Price:</label>
            <input
              type="number"
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Enter Description:</label>
            <input
              type="text"
              value={descInput}
              onChange={(e) => setDescInput(e.target.value)}
            />
          </div>

          <button type="submit">Save Data</button>
        </form>
        <Table data={data} handleDelete={handleDelete}></Table>
      </div>
    </div>
  );
}

export default App;
