'use client';
import React, { useRef } from "react";

export default function Contacto() {
    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const messajeRef = React.useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(messajeRef.current.value)
    };
    
    return (
        
        <section class='mx-10 my-1.5 '>
        <h1>Esta es la pagina para contactarnos!</h1>
        <h3>Informacion de contacto:</h3>
        <div class="flow-root max-w-sm">

            <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900">Telefono</dt>
                <dd class="text-gray-700 sm:col-span-2">223-592-7425</dd>
            </div>

            <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900">Correo Electronico</dt>
                <dd class="text-gray-700 sm:col-span-2">mateo@gmail.com</dd>
            </div>

            <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900">Instagram</dt>
                <dd class="text-gray-700 sm:col-span-2">mate_instagram</dd>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input ref={nameRef} type="text" placeholder="Nombre" /><br/>
            <label>Correo Electronico:</label>
            <input ref={emailRef} type="email" placeholder="Correo Electronico"/><br/>
            <input ref={messajeRef} type="text" placeholder="Dejanos tu mensaje aqui!"/><br/>    
            <button onClick={() => alert("Mensaje enviado con exito!")} >Enviar</button>
        </form>
   </section>
   
    );
   
}