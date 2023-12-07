import React from "react";
import { useState } from "react";

function Inputbox() {
  const [data, SetData] = useState("");
  // const[button,setButton]= useState("")
  const [tableData, setTableData] = useState([]);
  const[edit,SetEdit]= useState("false");

  const handleChange = (e) =>{
    SetData(e.target.value)
  }



  const handleEditChange = (index) => {
    const newData = prompt("Enter a new value");
  
    if (newData !== null) {
      setTableData((prevData) =>
        prevData.map((item, i) =>
          i !== index ? { ...item, name: newData } : item
        )
      );
    }
  };
  
  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data)
    setTableData([...tableData, { name: data }]);
    SetData("");
  };

  // const handleSubmit =(e) => {
  //   setButton(data)
  // }

  const handleDelete = (index) => {
    setTableData((prevData) => prevData.filter((item, i) => i !== index));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form style={{ width: "26rem" }}>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form4Example1">
                  Name
                </label>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
              >
                Add
              </button>
            </form>
            <table className="table">
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={handleEditChange}type="button" className="btn btn-primary">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inputbox;
