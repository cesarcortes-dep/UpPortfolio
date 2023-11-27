import React from "react";

export const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-End Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          {/* -------------- */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* -------------- */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* -------------- */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">APIs</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* -------------- */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Laravel</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* -------------- */}
        </div>
      </div>
    </div>
  );
};
