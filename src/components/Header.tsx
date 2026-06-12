import Button from "./Button";

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl font-bold'>Habbit Tracker</h1>
        <span className='text-zinc-400 text-sm'>1/1 done today</span>
      </div>

      <div className='flex flex-col gap-1 items-end'>
        <span>6 Apr - 12 Apr</span>

        <div className='flex gap-1 items-center justify-between'>
          <Button>Prev</Button>
          <Button>Next</Button>
        </div>
      </div>
    </header>
  )
}
