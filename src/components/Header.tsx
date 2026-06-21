
import Button from './Button'
import { useHabbits } from '../context/useHabits'
import { format ,isToday } from 'date-fns';



type HeaderProps={
  visibleDates:Date[];
  prevWeek:()=>void;
  nextWeek:()=>void;
}
export default function Header({visibleDates ,prevWeek,nextWeek}:HeaderProps) {
  const { habbits } = useHabbits()

  
  const dateRange = `${format(visibleDates[0],"MMM d")} - ${format(visibleDates.at(-1)!,"MMM d")}`;
  const doneToday = habbits.filter((h) => h.completions.some((c) => isToday(c)))
  return (
    <header className='flex items-center justify-between'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl font-bold'>Habbit Tracker</h1>
        <span className='text-zinc-400 text-sm'>{`${doneToday.length}/${habbits.length} done today`}</span>
      </div>

      <div className='flex flex-col gap-1 items-end'>
        <span>{dateRange}</span>

        <div className='flex gap-1 items-center justify-between'>
          <Button onClick={prevWeek}>Prev</Button>
          <Button onClick={nextWeek}>Next</Button>
        </div>
      </div>
    </header>
  )
}
