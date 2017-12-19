import React from 'react';

const PresentsItem = ({ item }) => {
  return item.link ? (
    <li><a href="{item.link}">{item.title}</a> ({item.time}), {item.place} {item.date}</li>
  ) : (
    <li>{item.title} ({item.time}), {item.place} {item.date}</li>
  );
};

export default PresentsItem;
