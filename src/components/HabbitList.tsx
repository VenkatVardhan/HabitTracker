import { subDays } from 'date-fns/fp';
import Button from './Button'
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isFuture,
  isSameDay,
  startOfWeek,
} from 'date-fns'

import { useHabbits } from '../context/HabbitProvider';


export type Habbit = { id: string; name: string ;completions:Date[]}

export default function HabbitList() {
  const {habbits} =useHabbits();
  if (habbits.length === 0) {
    return (
      <h1 className='text-center text-zinc-500 py-12'>
        No habbits yet. add one to get started
      </h1>
    )
  }
  return (
    <div className='flex flex-col gap-3'>
      {habbits.map((habbit) => {
        return <HabbitItem key={habbit.id} id={habbit.id} habbit={habbit}  />
      })}
    </div>
  )
}
type HabbitItemProps = {

  id: string
  habbit:Habbit
}

function HabbitItem({id ,habbit}: HabbitItemProps) {
  const {deleteHabbit,toggleHabbit} = useHabbits();
  
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  })
  const streak = getStreak(habbit.completions)
  return (
    <div className='rounded-xl bg-zinc-800 p-4 flex-col flex gap-3'>
      <div className='flex items-center justify-between '>
        <div className='flex gap-3'>
          <span>{habbit.name}</span>
          {streak!==0 && <span>🔥 {streak}</span>}
        </div>
        <Button onClick={()=>deleteHabbit(id)} variant='ghost-destructive' className='text-sm'>
          Delete
        </Button>
      </div>
      <div className='flex gap-1.5'>
        {visibleDates.map((date) => (
          <Button
          onClick={()=>toggleHabbit(id,date)}
            className='flex flex-col flex-1 gap-0.5 text-xs rounded-lg'
            key={date.toISOString()}
            disabled={isFuture(date)}
            variant={habbit.completions.some(d=>isSameDay(d,date))?"primary":"secondary"}
          >
            <span className='font-medium'>{format(date, 'EEE')}</span>
            <span>{format(date, 'd')}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

function getStreak(completions:Date[]){
  let count =0;
  let date = new Date()
  while(completions.some(c=>isSameDay(date,c))){
    count++;
    date=subDays(1,date)
  }
  return count;


}
