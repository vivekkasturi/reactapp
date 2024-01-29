import './App.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {

  const [inputdata, setInputdata] = useState("");
  const [arraydata, setArraydata] = useState([]);
  const [indexvalue, setIndexvalue] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const AddData = (e) => {

    setInputdata(e.target.value)


  };

  const Submitdata = () => {

    setArraydata(() => [...arraydata, inputdata]) ///spread the data and push
    setInputdata("")
    return console.log(arraydata);
  };

  const deletedata = (data, index) => {

    console.log(data);

    const deleteddata = arraydata.filter((element, index1) => {
      if (index1 !== index) {
        return true
      }
      return false
    })
    console.log("deleteddata:-", deleteddata);
    setArraydata(() => [...deleteddata]);
  }

  const editfn = (data, index) => {

    setInputdata(data);
    setIndexvalue(index);
    setIsVisible(true);

  }

  const updatedata = () => {

    arraydata[indexvalue] = inputdata;
    console.log(arraydata[indexvalue]);
    setArraydata(() => [...arraydata])
    setInputdata("");
    setIsVisible(false);
  }
  return (
    <div className="App">
      <h1>ToDo List Demo App</h1>
      <h4>Do it now</h4>

      <hr />
      <input type="text" name="inputbox" placeholder="Add item..." value={inputdata} onChange={AddData} />
      <br />
    
      {isVisible ? " " :   <button type="button" class="btn btn-primary" onClick={Submitdata}>Add</button> }
      {isVisible ? <button type="button" class="btn btn-success"onClick={updatedata}>Update</button> : " "}
      <br />
      <br />
     <table>
            <thead >
              <tr>
                <th scope="col" >Sl.No.</th>
                <th scope="col">Task Name</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
      {

        arraydata.map((data, index) => {
     
            return(
            <>
              <tbody>

                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data}</td>
                  <td><button className="deletebtn" onClick={() => deletedata(data, index)}><FontAwesomeIcon icon="fa-solid fa-trash" /></button>  <button  className="editbtn"onClick={() => editfn(data, index)}><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>  </td>
                </tr>


              </tbody>
            </>
            )
      
        }
        )


      }
      </table>
    </div>

  );
}

export default App;
library.add(fas, fab, far)