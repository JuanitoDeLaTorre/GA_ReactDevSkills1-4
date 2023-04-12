import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";

function App() {

  const[skills,setSkills]  = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 }
  ]);

  const name = useRef()
  const level = useRef()

  function handleAddSkill(newSkill) {
    console.log(newSkill)
    setSkills([...skills, newSkill])

  }

  Array.from(skills).map((skill)=> {
    console.log(skill.name)
})

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr></hr>
      <NewSkillForm addSkill = {handleAddSkill}/>
      <hr />
    </div>
  );
}

export default App;
