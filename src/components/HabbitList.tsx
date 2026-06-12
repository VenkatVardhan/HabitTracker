export default function HabbitList(){
  const habbits = ["one","two","three"]
  if(habbits.length===0){
    return <h1 className="text-center text-zinc-500 py-12"
    >No habbits yet. add one to get started</h1>
  }
  return (
    <div className="flex flex-col gap-3">

      {habbits.map((habbit,i)=>{
        return <h1 key={i}>{habbit}</h1>
      })}
      
    </div>
  )
}