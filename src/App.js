// src/App.js
import React from 'react';
import Header from './elements/Header';
import Greeting from './props/Greetings';


function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <Greeting name="Lucas" />
          <p>I've been write on the App.js file.</p>
        </section>
        <section>
          <ul>
            <li><Greeting name="Maria" /></li>
            <li><Greeting name="Helena" /></li>
            <li>João</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Foooooter</p>
      </footer>
    </div>
  );
}

export default App;
