import './index.css' 
import './layout.css' 
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
  const todos = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Walk the dog', completed: true },
    { id: 3, title: 'Read a book', completed: false },
  ];

  return (
    <>
        <Header todos={todos}/>
        <Tabs todos={todos}/>
        <TodoList todos={todos}/>
        <TodoInput todos={todos}/>
    </>
  )
}

export default App
