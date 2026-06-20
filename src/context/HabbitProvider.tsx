import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Habbit } from '../components/HabbitList'
import { isSameDay } from 'date-fns'

type Context = {
  habbits: Habbit[]
  addHabbit: (name: string) => void
  deleteHabbit: (id: string) => void
  toggleHabbit: (id: string, date: Date) => void
}

type HabbitProviderProps = {
  children: ReactNode
}
export const HabbitContext = createContext<null | Context>(null)

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
export function useHabbits(){
  const habbitContext = useContext(HabbitContext);
  if(habbitContext===null){
    throw new Error("Null context");
  }
  return habbitContext;
}
