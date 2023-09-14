'use client';
import { useState } from "react";

export default function Contador() {
    const [count, setCount] = useState(0);

    return (
        <div className="text-7xl h-screen w-screen flex flex-col justify-center items-center"> 
            <h1>{count} </h1>
            <button onClick={() => setCount(count + 1) } class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-xs font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 "
         href="/download">
            Clickea aqui!
            </button>
        </div>



       
       
     
       )
   }

   
