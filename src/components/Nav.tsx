import React from 'react'

interface NavFilter {
  setFilter: (filter: 'todos' | 'realizados' | 'incompleta') => void
  filterCount: number
  clearComplete: () => void
}

// Incluyendo NavFilter como tipo de las props usando React.FC<NavFilter>
export const Nav: React.FC<NavFilter> = ({
  setFilter,
  filterCount,
  clearComplete
}) => {
  return (
    <nav className="flex flex-col items-center justify-center">
      <ul className="flex items-center justify-around w-full p-3">
        <li className="cursor-pointer text-md text-slate-100"
          onClick={() => { setFilter('todos') }}
        > Todas</li>
        <li
          className="cursor-pointer text-md text-slate-100"
          onClick={() => { setFilter('realizados') }}> Realizadas</li>
        <li
          className="cursor-pointer text-md text-slate-100"
          onClick={() => { setFilter('incompleta') }}>Incompletas</li>
        <li className="cursor-pointer text-md text-slate-100">Pendientes: {filterCount}</li>
        <li className="cursor-pointer text-md text-slate-100" onClick={clearComplete}>Quitar Realizados</li>
      </ul>
    </nav>
  )
}
