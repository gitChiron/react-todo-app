import React, { useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';
// import { AddTodo } from './components/AddTodo'
import Context from './context';
import Loader from './components/Loader';

const AddTodo = React.lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(import('./components/AddTodo'))
  }, 1500)
}))

const App = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 1000)
      })
  }, [])

  const toggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodo = title => {
    setTodos(
      todos.concat([
        { title, id: Date.now(), completed: false }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todo List</h1>
        {
          loading
            ? <Loader />
            : <TodoList todos={todos} onToggle={toggleTodo} loading={loading} />
        }
        <React.Suspense fallback={<p>Loading...</p>} >
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
      </div>
    </Context.Provider>
  )
}

export default App;
