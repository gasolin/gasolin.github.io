import React from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';
import data from './presents-data';
import PresentsItem from './presents-item';

const Presents = props => (<Grid>
  <Cell col={12}>
    <h2>Lectures/Presentations</h2>
  </Cell>
  {data.map(yearly => (<Cell col={6}>
     <h3 id="{yearly.year}">{yearly.year}</h3>
     <ul>
       {yearly.presents.map(item => <PresentsItem item={item}/>)}
     </ul>
  </Cell>))}
</Grid>);

export default Presents;
