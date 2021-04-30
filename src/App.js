import React from "react"
import Header from "./component/Header"
import "./style.css"

function App(){
  const grade = 69;
  let name 
  if (grade>=70 && grade <= 80){
    name ="Olajide"
  }
  else if(grade<70){
    name="jENDO"
  }
  return(
    <div >
      <Header/>
      <h1>My name is {name}</h1>
    </div>
  )
}

export default App

