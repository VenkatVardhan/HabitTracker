
import { useState } from "react";
import HabbitForm from "./components/HabbitForm";
import HabbitList, { type Habbit } from "./components/HabbitList";
import Header from "./components/Header";

const App=()=>{
    const [habbits,setHabbits]  = useState<Habbit[]>([
      // { id: 1, name: 'one' },
      // { id: 2, name: 'two' },
    ]);
    function addHabbit(name:string){
      setHabbits(curr=>[...curr,{id:crypto.randomUUID(),name:name}])
      
    }
    function deleteHabbit(id:string){
      setHabbits(curr=>curr.filter(habbit=>habbit.id!==id))
    }
  return (
    <div className='max-w-2xl mx-auto p-4 flex flex-col gap-4'>
      <Header />
      <HabbitForm addHabbit={addHabbit} />
      <HabbitList habbits={habbits} deleteHabbit={deleteHabbit} />
    </div>
  )
}
export default App;
