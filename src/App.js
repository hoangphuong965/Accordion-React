import React from 'react';
import questions from './data';
import Accordion from './Accordion';

function App() {
  return (
    <main className='container'>
      <Accordion questions={questions} />
    </main>
  );
}

export default App;
