import { useState } from 'react'
import Button from './Button'

export default function HabbitForm() {
  const [name, setName] = useState<string>('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  return (
    <form action='' className='flex gap-2'>
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
      <Button className='rounded-lg px-4 py-2 font-bold'>Add Habbit</Button>
    </form>
  )
}
