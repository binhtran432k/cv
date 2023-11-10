import PropTypes from "prop-types";
import { FaGithub, FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./UserInfo.css";

/**
 * @typedef UserInfoProps
 * @property {import("../App").UserData} user
 */

/**
 * @type {React.FC<UserInfoProps>} _
 */
export const UserInfo = ({ user }) => {
  return (
    <div className="Header">
      <div className="info">
        <h1 className="fullname">
          {user.firstName}{" "}
          <b>{[user.middleName, user.lastName].filter(Boolean).join(" ")}</b>
        </h1>
        <ul className="contacts">
          {[
            [FaGithub, user.github],
            [FaLinkedin, user.linkedin],
            [FaEnvelope, user.email],
            [FaPhone, user.phone],
          ]
            .filter(([, x]) => Boolean(x))
            .map(
              /**
               * @param {[import("react-icons").IconType, import("../App").ContactItem]} _
               * @param {number} i
               * @returns {React.ReactNode}
               */
              ([Icon, x], i) => (
                <li key={i} className="contact-item">
                  <a href={x.url} target="_blank" rel="noreferrer">
                    <Icon />
                    {x.text}
                  </a>
                </li>
              ),
            )}
        </ul>
        <div className="description">{user.description}</div>
      </div>
      <div className="avatar">
        {user.avatar && (
          <img
            src={user.avatar.url}
            alt="Avatar"
            style={{ objectPosition: user.avatar.position }}
          />
        )}
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};
