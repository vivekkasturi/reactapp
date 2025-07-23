import { useState, useEffect } from "react";

export default function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [gridData, setGridData] = useState([]);

  // Use useEffect to update gridData when rows or columns change
  useEffect(() => {
    if (rows > 0 && columns > 0) {
      const totalCells = rows * columns;
      const newGridData = Array.from({ length: totalCells }, (_, index) => index + 1);
      setGridData(newGridData);
    } else {
      setGridData([]);
    }
  }, [rows, columns]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    console.log(`Grid created with ${rows} rows and ${columns} columns`);
  };

  const handleRowsChange = (e) => {
    setRows(parseInt(e.target.value) || 0);
  };

  const handleColumnsChange = (e) => {
    setColumns(parseInt(e.target.value) || 0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Rows{" "}
          <input
            type="number"
            value={rows}
            name="rows"
            onChange={handleRowsChange}
            min="0"
          />
        </label>
        <label>
          Columns{" "}
          <input
            type="number"
            value={columns}
            name="columns"
            onChange={handleColumnsChange}
            min="0"
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {gridData.length > 0 && (
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gap: "1px",
            border: "1px solid black",
            marginTop: "20px",
            width: "fit-content",
          }}
        >
          {gridData.map((cellValue, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              {cellValue}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}