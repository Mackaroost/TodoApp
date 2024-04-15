import Todo from './Todo'
import { type TodoId, type ListaTodo, type TodoCompletada } from './types'
import { IoIosAddCircle } from 'react-icons/io'

interface TodoProps {
  todos: ListaTodo
  deleteTodo: (id: TodoId) => void
  completeTodo: (id: TodoId, completada: TodoCompletada) => void
  addProduct: (item: string) => void
  setNewTodo: (item: string) => void
  newTodo: string
}

const Todos: React.FC<TodoProps> = ({
  todos,
  deleteTodo,
  completeTodo,
  addProduct,
  setNewTodo,
  newTodo
}) => {
  const handleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    addProduct(newTodo)
  }
  return (
    <>
      <form
        className="bg-slate-50 flex justify-between gap-x-3 p-3 rounded-md shadow-md"
        onSubmit={handleAdd}
      >
        <input
          className="w-full rounded-md outline-none border-none focus:none bg-slate-300 p-2  font-medium"
          placeholder="Agregar tarea"
          type="text"
          value={newTodo}
          onChange={(e) => { setNewTodo(e.target.value) }}
        />
        <button className="text-4xl cursor-pointer  rounded-sm text-slate-900">
          <IoIosAddCircle />
        </button>
      </form>
      <div>
        <h3 className="text-slate-50 py-3 text-center text-lg font-semibold">Lista de tareas</h3>
        <ul>
          {todos.map((item) => {
            return (
              <li className="py-2 text-slate-100 text-lg" key={item.id} >
                <Todo
                  key={item.id}
                  id={item.id}
                  todo={item.todo}
                  completada={item.completada}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Todos
