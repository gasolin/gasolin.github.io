import React from 'react';
import presentsSection from './presentsSection';
import data from './presents-data';

function Present() {
  return (
  <div>
      <div className="row">
        <div className="col-md-12">
          <h2>Lectures/Presentations</h2>
        </div>
      </div>
      <div className="row">
      {presentsSection(data)}
      </div>
  </div>
  );
}

export default Present;
