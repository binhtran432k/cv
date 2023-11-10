import PropTypes from "prop-types";
import "./Section.css";

/**
 * @typedef SectionProps
 * @property {string} title
 */

/**
 * @type {React.FC<SectionProps>} _
 */
export const Section = ({ title, children }) => {
  const [prefix, textTitle] = [title.slice(0, 3), title.slice(3)];
  const needShow =
    (!Array.isArray(children) && children) ||
    (Array.isArray(children) && children.length > 0);
  return (
    needShow && (
      <div className="Section">
        <h2 className="section-title">
          <div className="section-title-text">
            <span className="section-title-prefix">{prefix}</span>
            {textTitle}
          </div>
          <div className="section-title-line"></div>
        </h2>
        {children}
      </div>
    )
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
