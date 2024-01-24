import './App.css';
import { useState } from "react";

function App() {
  
 const [inputdata, setInputdata]=useState("");
 const [arraydata, setArraydata] = useState([]);

  const AddData = (e) => {
  
   setInputdata(e.target.value)
  };

  const Submitdata = ()=>{

   setArraydata(()=>[...arraydata,inputdata]) ///spread the data and push
 
    return console.log(arraydata);
  };

 const deletedata=(data)=>{

  console.log(data);

    const deleteddata= arraydata.filter((element)=>{if(element!=data){
      return true
    }})
    console.log("deleteddata:-",deleteddata);
    setArraydata(()=>[...deleteddata]);
 }

  return (
    <div className="App">
      <h1>To do Application</h1>
        <hr />
        <input type="text" name="inputbox" placeholder="Add item..."  onChange={AddData}/>
        <br />
        <button onClick={Submitdata}>Add</button>
    {inputdata}
    {
 
      arraydata.map((data,index)=>{

        return(
          
          <div>
          
            <ul> 
          <li key={index}>{data} <button onClick={()=>deletedata(data,index)}>Delete</button></li>
            </ul>

        

            </div>
        )
      })
    }
    </div>
  );
}

export default App;
