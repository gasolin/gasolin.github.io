import React from 'react';

function presentsList(presents) {
  return presents.map(item => (
    <li><a href="{item.link}">{item.title}</a> ({item.time}), {item.place} {item.date}</li>
  ));
}

export default presentsList;
