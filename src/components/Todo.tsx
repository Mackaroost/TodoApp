import { type TodoId, type TodoCompletada } from './types'
import { IoMdCloseCircle } from 'react-icons/io'

interface Props {
  id: TodoId
  todo: string
  completada: TodoCompletada
  deleteTodo: (id: TodoId) => void
  completeTodo: (id: TodoId, completada: TodoCompletada) => void
}

const Todo: React.FC<Props> = ({ id, todo, completada, deleteTodo, completeTodo }) => {
  return (
    <div className='flex justify-between items-center gap-2'>
        <input
          checked={completada}
          type='checkbox'
          onChange={(event) => { completeTodo(id, event.target.checked) }}
        />
        <p className={completada ? 'line-through' : ''}>{todo}</p>
        <div
        className='text-3xl cursor-pointer  rounded-sm text-slate-300'
        onClick={() => { deleteTodo(id) }}>
        <IoMdCloseCircle />
        </div>
    </div>
  )
}

export default Todo
