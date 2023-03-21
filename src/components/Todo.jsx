import Button from '@atlaskit/button';
import React from 'react';

function Todo(props) {
  const { id, name, isDone } = props;
  console.log(props);

  return <Button shouldFitContainer>{name}</Button>;
}

export default Todo;
