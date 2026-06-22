import { parseISO } from "date-fns";
import { useEffect, useState } from "react";


export function useLocalStorage<T>(key:string ,intialValue:T){
  const [storedValue,setStoredValue]=useState<T>(()=>{
    try{
    const item = localStorage.getItem(key)
    if(item==null){
      return intialValue;
    }
    return JSON.parse(item,dateReviver);
  }
  catch{
    return intialValue;
  }

  });



  useEffect(()=>{
    localStorage.setItem("habbit",JSON.stringify(storedValue))
  },[key,storedValue])
   
  return [storedValue,setStoredValue] as const


}

function dateReviver(_key:string,value:unknown){

  if(typeof value ==="string" && /^\d{4}-\d{2}-\d{2}T/.test(value)){
    return parseISO(value)
  }
  else{
    return value
  }

}