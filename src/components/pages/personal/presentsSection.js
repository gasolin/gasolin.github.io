import React from 'react';
import presentsList from './presentsList';

function presentsSection(data) {
  return data.map(yearly => (
    <div className="col-md-6">
      <h3 id="{yearly.year}">{yearly.year}</h3>
      <ul>
        {presentsList(yearly.presents)}
      </ul>
    </div>
  ));
}

export default presentsSection;
