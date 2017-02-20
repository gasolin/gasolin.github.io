import React from 'react';
import PresentsSection from './presents-section';

function Present() {
  return (
  <div>
      <div className="row">
        <div className="col-md-12">
          <h2>Lectures/Presentations</h2>
        </div>
      </div>
      <div className="row">
       {PresentsSection()}
      </div>
  </div>
  );
}

export default Present;
