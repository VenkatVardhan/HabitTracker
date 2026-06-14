
import Button from './Button'
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isFuture,
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
      {habbits.map((habbit) => {
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
    start: startOfWeek(new Date(),{weekStartsOn:1}),
    end: endOfWeek(new Date(),{weekStartsOn:1}),
  })
  return (
    <div className='rounded-xl bg-zinc-800 p-4 flex-col flex gap-3'>
      <div className='flex items-center justify-between '>
        <div className='flex gap-3'>
          <span>{habbit.name}</span>
          <span>🔥 3</span>
        </div>
        <Button variant='ghost-destructive' className='text-sm'>Delete</Button>
      </div>
      <div className='flex gap-1.5'>
        {visibleDates.map((date) => (
          <Button className='flex flex-col flex-1 gap-0.5 text-xs rounded-lg' key={date.toISOString()} disabled={isFuture(date)}>
           
              <span className='font-medium'>{format(date,"EEE")}</span>
              <span>{format(date,'d')}</span>
           
          </Button>
        ))}
      </div>
    </div>
  )
}
