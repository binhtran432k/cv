import "./Skill.css";

/**
 * @typedef SkillProps
 * @property {import("src/App").SkillItem[]} skills
 */

/**
 * @param {SkillProps} _
 */
export const Skill = ({ skills }) => {
  return (
    <div className="Skill">
      <table className="skill-table">
        <tbody>
          {skills.map((s) => (
            <tr key={s.name}>
              <th className="skill-name">{s.name}</th>
              <td>{s.subskills.join(" | ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
