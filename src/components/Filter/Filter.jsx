import React from 'react';
import { Div, Label, Input } from './Filter.styled';

//Компонент фільтрації контактів
function Filter({ value, onChangeFilter }) {
  return (
    <Div>
      <Label>
        Find contacts by Name
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </Div>
  );
}

export default Filter;
