import React from 'react';
import presentsItem from './presentsItem';

function presentsSection(data) {
  return data.map(yearly => (
    <div className="col-md-6">
      <h3 id="{yearly.year}">{yearly.year}</h3>
      <ul>
        {yearly.presents.map(item => presentsItem(item))}
      </ul>
    </div>
  ));
}

export default presentsSection;
