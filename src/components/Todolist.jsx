import React, { useState } from 'react';
import Todo from './Todo';

function Todolist(props) {
  const { todolist } = props;
  return (
    <>
      {todolist.map((e, i) => (
        <div key={e.id}>
          <Todo {...e} />
        </div>
      ))}
    </>
  );
}

export default Todolist;
