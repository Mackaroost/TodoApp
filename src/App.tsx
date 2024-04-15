import { useState } from 'react'
import Todos from './components/Todos'
import {
  type Todo,
  type TodoText,
  type TodoCompletada,
  type TodoId
} from './components/types'
import { Nav } from './components/Nav'

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<'todos' | 'realizados' | 'incompleta'>(
    'todos'
  )
  const [newTodo, setNewTodo] = useState('')

  const addProduct = (todoInput: TodoText): void => {
    const todoObj = {
      id: Date.now().toString(),
      todo: todoInput,
      completada: false
    }
    setTodos((todos) => [...todos, todoObj])
    setNewTodo('')
  }
  const filterTodo = todos.filter((item) => {
    if (filter === 'realizados') return item.completada
    if (filter === 'incompleta') return !item.completada
    return true
  })

  const count = todos.filter((item) => !item.completada).length

  const handleRemoveCompleted = (): void => {
    const updatedTodo = todos.filter((item) => !item.completada)
    setTodos(updatedTodo)
  }

  const handleRemove = (id: TodoId): void => {
    const updatedTodo = todos.filter((item) => item.id !== id)
    setTodos(updatedTodo)
  }

  const handleComplete = (id: TodoId, completada: TodoCompletada): void => {
    const updateTodo = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completada }
      }
      return item
    })
    setTodos(updateTodo)
  }

  return (
    <section className="bg-stone-300 h-screen py-20 ">
      <main className="shadow rounded-md bg-slate-600 p-8  container mx-auto m-4 md:w-2/5">
        <h2 className=" text-center pb-3 text-2xl text-slate-100 font-semibold ">
          Ingrese Tareas
        </h2>
        <Nav
          setFilter={setFilter}
          filterCount={count}
          clearComplete={handleRemoveCompleted}
        />
        <Todos
          todos={filterTodo}
          deleteTodo={handleRemove}
          completeTodo={handleComplete}
          addProduct={addProduct}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
        />
      </main>
    </section>
  )
}

export default App
