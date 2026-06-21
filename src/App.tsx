import { useState } from 'react'
import HabbitForm from './components/HabbitForm'
import HabbitList from './components/HabbitList'

import Header from './components/Header'

import { HabbitProvider } from './context/HabbitProvider'
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns'

const App = () => {
  const [weekOffset, setWeekOffset] = useState<number>(0)
  function nextWeek(){
      setWeekOffset(curr=>curr+1)
    }
    function prevWeek(){
      setWeekOffset(curr=>curr-1)
    }
  
    
    const week  = addWeeks(new Date(),weekOffset)
  
    const visibleDates=eachDayOfInterval({
      start:startOfWeek(week, {weekStartsOn:1}),
      end:endOfWeek(week ,{weekStartsOn:1})
    })
  return (
    <div className='max-w-2xl mx-auto p-4 flex flex-col gap-4'>
      <HabbitProvider>
        <Header visibleDates={visibleDates} nextWeek={nextWeek} prevWeek ={prevWeek} />
        <HabbitForm />
        <HabbitList visibleDates={visibleDates} />
      </HabbitProvider>
    </div>
  )
}
export default App
