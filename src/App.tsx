import {useEffect, useState, useRef} from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './types'

const initialState = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'dapelu hace de admin a veces'
  },
  {
    nick: 'setgio_serrano',
    subMonths: 2,
    avatar: 'https://i.pravatar.cc/150?u=sergio',
  },
]


function App() {

  const [subs, setSubs] = useState<Array<Sub>>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  setSubs(initialState)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
