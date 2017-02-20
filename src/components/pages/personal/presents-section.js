import React from 'react';
import PresentsItem from './presents-item';
import data from './presents-data';

function PresentsSection() {
  return data.map(yearly => (
    <div className="col-md-6">
      <h3 id="{yearly.year}">{yearly.year}</h3>
      <ul>
        {yearly.presents.map(item => PresentsItem(item))}
      </ul>
    </div>
  ));
}

export default PresentsSection;
