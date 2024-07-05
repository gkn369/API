import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  //get api
  const url = "https://jsonplaceholder.typicode.com/comments"
  useEffect(() =>{
    fetch(url, {
      headers:{
        companyId: '45643546645646'
      }
    }).then(
      response => response.json()
    ).then(json => 
      {console.log("json", json)
      setData(json)
      }
    ).catch(e => console.log("e", e))
  }, [])

  // post and put api implement
  const postPutEvent = () =>{
    const data ={
      id: "def234",
      name: "Gaurav",
      mobile: '988976354',
      designation: 'developer', 
      pin: '45678'
    }
    const url = data.id
      ? "https://jsonplaceholder.typicode.com/comments"+data.id
      : "https://jsonplaceholder.typicode.com/comments";
  useEffect(() =>{
    fetch(url, {
      method: data.id ? 'PUT':'POST',
      headers:{
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin" : "*",
      },
      body: JSON.stringify(data)
    }).then(
      response =>{
        console.log("response", response)
        if(response.status == 200)
          alert("Success")
      }
    ).catch(e => console.log("e", e))
  })
  }
  return (
    <div>
      <h1>Welcome</h1>
        {data.map(item => {
          return <div>{item.email}</div>;
        })}
      <button onClick={postPutEvent}>Submit</button>
    </div>
  );
}

export default App;
