import "./Timeline.css";

/**
 * @typedef TimelineProps
 * @property {import("../App").TimelineItem} timeline
 */

/**
 * @param {TimelineProps} _
 */
export const Timeline = ({ timeline }) => {
  return (
    <div className="Timeline">
      <div className="timeline-header">
        {timeline.logo && (
          <div className="timeline-logo">
            <img src={timeline.logo} alt={timeline.title} />
          </div>
        )}
        <div className="timeline-title-container">
          <div className="timeline-title-row">
            <h3 className="timeline-title">
              {timeline.link ? (
                <a
                  href={timeline.link}
                  target="_blank"
                >
                  {timeline.title}
                </a>
              ) : (
                timeline.title
              )}
            </h3>
            <div className="timeline-time">{timeline.time}</div>
          </div>
          <div className="timeline-title-row">
            <h4 className="timeline-subtitle">{timeline.subtitle}</h4>
            <div className="timeline-location">{timeline.location}</div>
          </div>
        </div>
      </div>
      <ul className="timeline-list">
        {timeline.items.map((x, i) => (
          <li className="timeline-item" key={i}>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
};
