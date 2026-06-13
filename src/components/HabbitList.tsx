import Button from './Button'
import {
  eachDayOfInterval,
  endOfWeek,
  
  startOfWeek,
} from 'date-fns'

export default function HabbitList() {
  const habbits = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
  ]
  if (habbits.length === 0) {
    return (
      <h1 className='text-center text-zinc-500 py-12'>
        No habbits yet. add one to get started
      </h1>
    )
  }
  return (
    <div className='flex flex-col gap-3'>
      {habbits.map((habbit, i) => {
        return <HabbitItem key={habbit.id} habbit={habbit} />
      })}
    </div>
  )
}
type HabbitItemProps = {
  habbit: { id: number; name: string }
}

function HabbitItem({ habbit }: HabbitItemProps) {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date()),
  })
  return (
    <div className='rounded-xl bg-zinc-800 p-4 flex-col flex gap-3'>
      <div className='flex ietms-center justify-between '>
        <div className='flex gap-3'>
          <span>{habbit.name}</span>
          <span>🔥 3</span>
        </div>
        <Button>Delete</Button>
      </div>
      <div className='flex gap-1.5'>
        {visibleDates.map((date) => (
          <Button key={date.toISOString()}>
            <div className='flex flex-col g-3'>
              <span>Monday</span>
              <span>{date.getDay()}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}
