import { useState, type SubmitEvent } from 'react'
import Button from './Button'
import { useHabbits } from '../context/HabbitProvider'


export default function HabbitForm() {
  const habbitContext  = useHabbits();
  
  const [name, setName] = useState<string>('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit=(e:SubmitEvent)=>{
    e.preventDefault();
    if(name.trim()==="") return 
    setName(name)
    habbitContext.addHabbit(name)
    setName("")



  }
  return (
    <form action='' className='flex gap-2' onSubmit={e=>handleSubmit(e)}>
      
      <input
        className='flex-1 px-4 py-2 rounded-lg focus-visible:ring-2 focus-visible:ring-violet-500 '
        type='text'
        name='habbit'
        id='habbit'
        value={name}
        onChange={(event) => {
          handleChange(event)
        }}
        placeholder='New habit...'
      />
      <Button disabled={name.trim()===""} className='rounded-lg px-4 py-2 font-bold'>Add Habbit</Button>
    </form>
  )
}
