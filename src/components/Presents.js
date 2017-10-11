import React from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';
import data from './presents-data';
import PresentsItem from './presents-item';

const Presents = props => (<Grid>
  <Cell col={12}>
    <h2>Lectures/Presentations</h2>
  </Cell>
  {data.map(yearly => (<Cell col={6} key={yearly.year}>
     <h3 id={yearly.year}>{yearly.year}</h3>
     <ul>
       {yearly.presents.map((item, idx) => <PresentsItem item={item} key={idx}/>)}
     </ul>
  </Cell>))}
</Grid>);

export default Presents;
