import {  useState, type ReactNode } from 'react'

import { isSameDay } from 'date-fns'
import { HabbitContext, type Habbit } from './useHabits'



  type HabbitProviderProps = {
    children: ReactNode
  }


export function HabbitProvider({ children }: HabbitProviderProps) {
  const [habbits, setHabbits] = useState<Habbit[]>([
    // { id: 1, name: 'one' },
    // { id: 2, name: 'two' },
  ])
  function addHabbit(name: string) {
    setHabbits((curr) => [
      ...curr,
      { id: crypto.randomUUID(), name: name, completions: [new Date()] },
    ])
  }
  function deleteHabbit(id: string) {
    setHabbits((curr) => curr.filter((habbit) => habbit.id !== id))
  }

  function toggleHabbit(id: string, date: Date) {
    setHabbits((curr) =>
      curr.map((h) => {
        if (h.id !== id) return h

        const isAlreadyCompleted = h.completions.some((c) => isSameDay(c, date))
        const newCompletions = isAlreadyCompleted
          ? h.completions.filter((c) => !isSameDay(c, date))
          : [...h.completions, date]

        return { ...h, completions: newCompletions }
      })
    )
  }
  return (
    <HabbitContext value={{ habbits, addHabbit, deleteHabbit, toggleHabbit }}>
      {children}
    </HabbitContext>
  )
}

