'use client';
import { useState } from "react";

export default function Contador() {
    const [count, setCount] = useState(0);

    return (
        <div class="mx-10 my-1.5"> 
            <h1>Haz hecho clic {count} veces!</h1>
            <button onClick={() => setCount(count + 1) } class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
         href="/download">
            Clickea aqui!
            </button>
        </div>



       
       
     
       )
   }

   
