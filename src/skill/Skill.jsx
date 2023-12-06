import PropTypes from "prop-types";
import "./Skill.css";

/**
 * @typedef SkillProps
 * @property {import("src/App").SkillItem[]} skills
 */

/**
 * @type {React.FC<SkillProps>}
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

Skill.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object.isRequired),
};
