import React, { Component} from 'react';
import Nav from './components/Nav'

import Widget from './components/Widget'

interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps){
  return<button className="bg-gray-800 px-9 h-11 rounded hover:bg-green-900 transition-colors text-white">{props.text ?? 'Default'}</button>
} 

function App() {
  return (
      <section className='bg-hero-bg h-screen bg-center bg-cover'>
    <div className="flex flex-col gap-5 bold h-screen justify-center items-center text-green-900  ">
      <Button text="você" />
      <Button text="é" />
      <Button text="Muito apaixonante " />
      <Button text='podia rolar a gente,hein! xD'/>
      <Widget />
    </div>
    </section>
  )
}

export default App
