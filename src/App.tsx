
import { useState } from "react";
import HabbitForm from "./components/HabbitForm";
import HabbitList, { type Habbit } from "./components/HabbitList";
import Header from "./components/Header";
import { isSameDay } from "date-fns";

const App = () => {
  const [habbits, setHabbits] = useState<Habbit[]>([
    // { id: 1, name: 'one' },
    // { id: 2, name: 'two' },
  ]);
  function addHabbit(name: string) {
    setHabbits(curr => [...curr, { id: crypto.randomUUID(), name: name, completions: [new Date()] }])

  }
  function deleteHabbit(id: string) {
    setHabbits(curr => curr.filter(habbit => habbit.id !== id))
  }

  function toggleHabbit(id: string, date: Date) {
    setHabbits(curr => (
      curr.map(h => {
        if (h.id !== id) 
          return h;
        
        const isAlreadyCompleted = h.completions.some(c => isSameDay(c, date))
        const newCompletions = isAlreadyCompleted ? h.completions.filter(c=>!isSameDay(c, date)):[...h.completions,date]

        return {...h,completions:newCompletions}
          
        })
      ))
    }


return (
  <div className='max-w-2xl mx-auto p-4 flex flex-col gap-4'>
    <Header />
    <HabbitForm addHabbit={addHabbit} />
    <HabbitList habbits={habbits} deleteHabbit={deleteHabbit} toggleHabbit={toggleHabbit} />
  </div>
)
}
export default App;
