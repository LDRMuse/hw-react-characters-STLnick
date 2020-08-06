import React from 'react';

import { CharacterDisplay } from './components'

import './App.css';

export const App = () => {
  return (
    <main className="flex flex--align-center flex--justify-center">
      <CharacterDisplay />
    </main>
  );
}
