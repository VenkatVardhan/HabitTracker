import { createContext, useContext } from "react"

export type Habbit = { id: string; name: string; completions: Date[] }

type Context = {
  habbits: Habbit[]
  addHabbit: (name: string) => void
  deleteHabbit: (id: string) => void
  toggleHabbit: (id: string, date: Date) => void
}
export function useHabbits() {
  const habbitContext = useContext(HabbitContext)
  if (habbitContext === null) {
    throw new Error('Null context')
  }
  return habbitContext
}

export const HabbitContext = createContext<null | Context>(null)