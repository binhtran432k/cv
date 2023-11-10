import "./App.css";
import { Certificate } from "./certificate/Certificate";
import { Footer } from "./footer/Footer";
import {
  certificates,
  education,
  experiences,
  projects,
  publications,
  skills,
  user,
} from "./metadata";
import { Section } from "./section/Section";
import { Skill } from "./skill/Skill";
import { Timeline } from "./timeline/Timeline";
import { UserInfo } from "./userinfo/UserInfo";

/**
 * @typedef ContactItem
 * @property {string} text
 * @property {string} url
 */

/**
 * @typedef Avatar
 * @property {string} url
 * @property {string} position Make image clip to specific position
 */

/**
 * @typedef UserData
 * @property {string} firstName
 * @property {string?} middleName
 * @property {string} lastName
 * @property {ContactItem?} phone
 * @property {ContactItem?} github
 * @property {ContactItem?} linkedin
 * @property {ContactItem?} email
 * @property {ContactItem?} website
 * @property {Avatar?} avatar
 * @property {string} description
 */

/**
 * @typedef TimelineItem
 * @property {string?} logo
 * @property {string?} link
 * @property {string} title
 * @property {string} subtitle
 * @property {string} time
 * @property {string?} location
 * @property {string[]} items
 */

/**
 * @typedef CertificateItem
 * @property {number} year
 * @property {string} name
 * @property {string} host
 * @property {string?} url
 */

/**
 * @typedef SkillItem
 * @property {string} name
 * @property {string[]} subskills
 */

/**
 * @param {string} title
 * @param {TimelineItem[]} timelineSection
 */
function getTimelineSection(title, timelineSection) {
  return (
    <Section title={title}>
      {timelineSection.map((x, i) => (
        <Timeline timeline={x} key={i} />
      ))}
    </Section>
  );
}

function App() {
  return (
    <div className="App">
      <UserInfo user={user} />
      {getTimelineSection("Education", education)}
      {getTimelineSection("Professional Experience", experiences)}
      {getTimelineSection("Projects & Associations", projects)}
      <div className="page-break"></div>
      <Section title="Certificates">
        <Certificate certificates={certificates} />
      </Section>
      <Section title="Publications">
        {publications.map((p, i) => (
          <p className="publication-item" key={i}>
            {p}
          </p>
        ))}
      </Section>
      <Section title="Skills">
        <Skill skills={skills} />
      </Section>
      <Footer user={user} />
    </div>
  );
}

export default App;
