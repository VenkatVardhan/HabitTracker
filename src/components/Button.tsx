// type ButtonProps={
//   text:string
//}

import type { ReactNode } from "react"


type ButtonProps={
  children:ReactNode
}


export default function Button({children}:ButtonProps){//destructuring props
  return (
    <button disabled className="bg-violet-600 hover:bg-violet-500 rounded px-3 py-1 disabled:opacity-35 disabled:cursor-not-allowed">
      {/* default prop key called children represnsts whateever is between the compoenet */}
      {children}
    </button>
  )
}