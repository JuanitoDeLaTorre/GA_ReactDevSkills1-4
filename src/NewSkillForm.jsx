import { useState, useRef } from "react";

export default function NewSkillForm({addSkill}) {

    const [skills, setSkills] = useState({name: '', level: 3})
    const [color, setColor] = useState('')

    const { name, level } = skills

    // const name = useRef()
    // const level = useRef()

    function handleAddSkill(e) {
        e.preventDefault()
        const update = { ...skills, [e.target.name]: e.target.value }
        console.log(update)
        setSkills(update)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addSkill(skills)
        setSkills({...skills, name:''})
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Skill</label>
            <input value = {name} name = "name" type="text" onChange={handleAddSkill}/>
    
            <label htmlFor="">Level</label>
            <select name = "level" onChange={handleAddSkill}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">Submit new skill</button>
      </form>
        </>
      
    );
  }