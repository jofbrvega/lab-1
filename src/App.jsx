import './App.css'
import Todolist from './components/Todoform'

function App() {
  return (
    <div className="max-w-screen-xl mx-auto text-center p-10">
      <h1 className='text-4xl p-10'> To do list </h1>
      <Todolist />
    </div>
  )
}

export default App
