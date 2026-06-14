// type ButtonProps={
//   text:string
//}

import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"


type ButtonProps={
  variant?:"primary"|"secondary"|"ghost-destructive",
  
}
&ComponentProps<"button">

type Variant="primary"|"secondary"|"ghost-destructive"

export default function Button({variant="primary",className ,...props}:ButtonProps){//destructuring props
  return (
    <button  {...props} className={
      twMerge("rounded px-3 py-1 disabled:opacity-35 disabled:cursor-not-allowed",getVariantStyles(variant),className)} />)
     
  
  
}

function getVariantStyles(variant:Variant){
  switch (variant) {
    case 'primary':
      return 'bg-violet-600 hover:bg-violet-500 '
    case 'secondary':
      return 'bg-zinc-700 hover:bg-zinc-600 text-zinc-400'
    case 'ghost-destructive':
      return 'hover:bg-red-800 text-red-800 hover:text-red-200'

    default:
      throw new Error(`Invalid Variant ${variant satisfies never}`)
  }

}