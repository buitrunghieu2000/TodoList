import Todolist from './components/Todolist';
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import { useState } from 'react';
import { v4 } from 'uuid';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [textInput, setTextInput] = useState('');

  function handleGetTextInput(e) {
    setTextInput(e.target.value);
  }

  function handleAddtodo() {
    var check = todolist.some((e) => e.name == textInput);

    if (check) {
      alert('Work already exit try another');
    } else {
      setTodolist([
        ...todolist,
        { id: v4(), name: textInput, isComplete: false },
      ]);
      setTextInput('');
    }
  }

  function handleEnter(e) {
    if (e.key === 'Enter' && textInput) {
      handleAddtodo();
    } else if (e.key === 'Enter' && !textInput) {
      alert('Input Empty');
    }
  }

  return (
    <div className="App">
      <h2>Todo list</h2>
      <Textfield
        name="add-todo"
        placeholder="Type todo..."
        elemAfterInput={
          <Button
            appearance="primary"
            onClick={handleAddtodo}
            isDisabled={!textInput}
          >
            ADD
          </Button>
        }
        onChange={handleGetTextInput}
        onKeyDown={handleEnter}
        value={textInput}
      />
      <Todolist todolist={todolist} />
    </div>
  );
}

export default App;
