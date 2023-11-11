import '../css/style.css'
import LogoFreeCodeCamp from './LogoFreeCodeCamp'
import TodoList from './TodoList'

const App = () => {
  return (
    <div className='app'>
      <LogoFreeCodeCamp />
      <div className="tareas-listas-principal">
        <h1>todos</h1>
        <TodoList />
      </div>
    </div>
  )
}

export default App