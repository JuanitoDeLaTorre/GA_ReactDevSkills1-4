export default function SkillListItem({skill}) {
    return (
    <li>
        <div className="skillCard">
            {skill.name} - {skill.level}
        </div>
    </li>
    )
  }