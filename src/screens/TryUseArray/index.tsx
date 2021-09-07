import React from 'react';
import {useMount, useArray} from '../../utils';

export const TsReactTest = () => {
  const persons: {name: string; age: number}[] = [
    {name: 'jack', age: 22},
    {name: 'ma', age: 23},
  ];
  const {value, clear, removeIndex, add} = useArray(persons);
  useMount(() => {});
  return (
    <div>
      <button onClick={() => add({name: 'john', age: 23})}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>clear</button>
      {value.map((person, index) => (
        <div>
          <span>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
