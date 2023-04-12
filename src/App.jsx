import './App.css';
import { useState } from 'react';
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";

function App() {

  const[skills,setSkills]  = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 }
  ]);
  const [showToDo, setShowToDo] = useState(false)
  const [buttonName, setButtonName] = useState('Show Add Form')


  function handleAddSkill(newSkill) {
    console.log(newSkill)
    setSkills([...skills, newSkill])

  }

  function handleButtonClick() {
    setShowToDo(!showToDo)
    if (buttonName === "Show Add Form")
      return setButtonName('Hide Add Form')
    else
      return setButtonName('Show Add Form')
  }

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <button id = "showHideButton" onClick={handleButtonClick}>{buttonName}</button>
      <hr></hr>
      {showToDo && <NewSkillForm addSkill = {handleAddSkill}/>}
    </div>
  );
}

export default App;
