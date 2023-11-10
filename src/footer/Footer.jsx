import PropTypes from "prop-types";
import "./Footer.css";

/**
 * @typedef FooterProps
 * @property {import("src/App").UserData} user
 */

/**
 * @type {React.FC<FooterProps>} _
 */
export const Footer = ({ user }) => {
  return (
    <div className="Footer">
      <div className="footer-fullname">
        {[user.firstName, user.middleName, user.lastName]
          .filter(Boolean)
          .join(" ")}
      </div>
      <div className="footer-title">Curriculum Vitae</div>
    </div>
  );
};

Footer.propTypes = {
  user: PropTypes.object.isRequired,
};
