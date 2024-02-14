
import './App.css';

// App.js
import React from 'react';
import Flashcard from './Flashcard';

const App = () => {
  return (
    <div className="App">
      <Flashcard question="What language is React based on?" answer="React is based on javaScript." />
      <Flashcard question="What are the building block of React apps?" answer="Components are the building blocks of React apps." />
      <Flashcard question="What Syntax is use to describe a UI in React apps?" answer="JSX(javaScript XML)is the syntax used to describe UI in React apps." />
      <Flashcard question="How to pass data from parent to child component?" answer="Use props for data passing from parent to child in React." />
      <Flashcard question="How to give components memory?" answer="Use  useState Hook to give components memory." />
      <Flashcard question="What do we call and input element that is completely synchronised with state?" answer="A controlled input element." />
    </div>
  );
};

export default App;

