import { ThoughtsFeed } from './components/ThoughtsFeed';
import { ThoughtsForm } from './components/ThoughtsForm';
//import { useState } from "react";

export const App = () => {
  return (


    <div className="heading" >

      <h1>Project Happy Thoughts</h1>
      <h2>Technigo Education Team</h2>

      <ThoughtsForm />
      <ThoughtsFeed />
    </div>


  )
};
