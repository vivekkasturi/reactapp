import './App.css';
import { useState } from "react";

function App() {
  
 const [inputdata, setInputdata]=useState("");
 const [arraydata, setArraydata] = useState([]);
const [indexvalue,setIndexvalue] = useState(null);
const [isVisible,setIsVisible] = useState(false);

  const AddData = (e) => {
  
   setInputdata(e.target.value)

  
  };

  const Submitdata = ()=>{

   setArraydata(()=>[...arraydata,inputdata]) ///spread the data and push
 setInputdata("")
    return console.log(arraydata);
  };

 const deletedata=(data,index)=>{

  console.log(data);

    const deleteddata= arraydata.filter((element,index1)=>{ if(index1!=index){
      return true
    }})
    console.log("deleteddata:-",deleteddata);
    setArraydata(()=>[...deleteddata]);
 }

const editfn=(data,index)=>{

  setInputdata(data);
  setIndexvalue(index);
setIsVisible(true);

}

const updatedata =()=>{

  arraydata[indexvalue]=inputdata;
  console.log(arraydata[indexvalue]);
  setArraydata(()=>[...arraydata])
  setInputdata("");
  setIsVisible(false);
}
  return (
    <div className="App">
      <h1>To do Application</h1>
        <hr />
        <input type="text" name="inputbox" placeholder="Add item..." value={inputdata} onChange={AddData}/>
        <br />
       
       { isVisible ? " ":  <button onClick={Submitdata}>Add</button>}
       {isVisible ? <button onClick={updatedata}>Update</button>: " "} 
    {
 

      arraydata.map((data,index)=>{

        return(
          
          <div>
          
            <ul> 
          <li key={index}>{data} <button onClick={()=>deletedata(data,index)}>Delete</button> <button onClick={()=>editfn(data,index)}>edit</button> </li>

            </ul>
            </div>
        )
      })
    }
    </div>
  );
}

export default App;
