import "./Footer.css";

/**
 * @typedef FooterProps
 * @property {import("src/App").UserData} user
 */

/**
 * @param {FooterProps} _
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
