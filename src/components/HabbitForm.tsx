import Button from "./Button";

export default function HabbitForm(){
  return(

  <form action="" className="flex gap-2">
    <input  className = "flex-1 px-4 py-2 rounded-lg focus-visible:ring-2 focus-visible:ring-violet-500 " type="text" name="habbit" id="habbit" onChange={()=>{}} placeholder="New habit..."/>
    <Button>Add Habbit</Button>
  </form>
  )
}