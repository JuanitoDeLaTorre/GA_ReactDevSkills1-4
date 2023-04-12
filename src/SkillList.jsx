import SkillListItem from "./SkillListItem";

export default function SkillList({skills}) {
    // console.log(skills)
    // for(let i = 0; i < Array.from(skills).length; i++) {
    //     console.log(skills[i].name)
    // }

    // Array.from(skills).map((skill)=> {
    //     console.log(skill)
    // })
    return (
        <ul>
            {/* <SkillListItem name={"Pedro"}/>
            <SkillListItem name={"Pablo"}/>
            <SkillListItem name={"Enrique"}/> */}
        {skills.map((t, idx) => (
        <SkillListItem key={t.name} skill={t} />
      ))}
          {/* {Array.from(skills).map(skill => <SkillListItem key = {skill.name} name = {skill.name}/>)} */}
        </ul>
      );
}