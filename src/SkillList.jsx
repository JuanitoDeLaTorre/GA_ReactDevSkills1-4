import SkillListItem from "./SkillListItem";

export default function SkillList({skills}) {

    return (
        <ul>
        {skills.map((t, idx) => (
        <SkillListItem key={t.name} skill={t} />
      ))}
        </ul>
      );
}