import "./Timeline.css";
import { IoMdCheckmark } from "react-icons/io";

const Timeline = ({ steps = [] }) => {
  return (
    <div className="timeline">
      <h3>IPO Timeline</h3>

      <div className="timeline-container">
        {steps.map((step, index) => {
          const nextStep = steps[index + 1];

          const isCircleActive = step.status;
          const isLineActive =
            step.status && nextStep && nextStep.status;

          return (
            <div key={index} className="timeline-item">
              
              {/* Circle */}
              <div
                className={`timeline-circle ${
                  isCircleActive
                    ? "circle-active"
                    : "circle-inactive"
                }`}
              >
                {isCircleActive && (
                  <IoMdCheckmark className="check-icon" />
                )}
              </div>

              {/* Line AFTER circle (not for last item) */}
              {index !== steps.length - 1 && (
                <div
                  className={`timeline-line ${
                    isLineActive
                      ? "line-active"
                      : "line-inactive"
                  }`}
                />
              )}

              {/* Text */}
              <div className="timeline-text">
                <p className="step-label">{step.label}</p>
                <p className="step-date">{step.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;