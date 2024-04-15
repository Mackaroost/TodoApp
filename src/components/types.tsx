export interface Todo {
  id: string
  todo: string
  completada: boolean
}

export type TodoId = string
export type TodoText = string
export type TodoCompletada = boolean

export type ListaTodo = Todo[]
