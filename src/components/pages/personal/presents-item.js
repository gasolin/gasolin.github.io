import React from 'react';

function PresentsItem(item) {
  let str = (
    <li><a href="{item.link}">{item.title}</a> ({item.time}), {item.place} {item.date}</li>
  );
  if (!item.link) {
    str = (
      <li>{item.title} ({item.time}), {item.place} {item.date}</li>
    );
  }
  return str;
}

export default PresentsItem;
