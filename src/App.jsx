import './App.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoCard } from './components/TodoCard'

function App() {

  return (
    <>
      <div>
        <Header />
        <Tabs />
        <TodoInput />
        <TodoList />
        <TodoCard />
      </div>
    </>
  )
}

export default App
