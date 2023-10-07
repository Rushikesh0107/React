import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import {useState} from 'react'
import {useDrop} from 'react-dnd'
import {useSelector} from 'react-redux'
import TaskCard from './components/TaskCard'

function App() {

  const [completed, setCompleted] = useState([])
  const {tasks} = useSelector((state) => state.task)
  const [{isOver}, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => addToCompleted(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  const addToCompleted = (id) => {
    const moveTask = tasks.find((task) => task.id === id)
    setCompleted([...completed, moveTask])
  }

  return (
    <>
    <div className='flex'>
    <div className='flex flex-col w-full'>
      <h1 className='text-3xl font-bold mb-4 ml-96'>Kanban  Style Task Tracker</h1>
        <div className='flex flex-row'>
          <p className='text-xl'>Click</p>
            <AddTask />
          <p className='text-xl'>to add new Task</p>
        </div>
    <div className='mt-2 flex p-2'>
      <h2 className='text-lg font-semibold bg-gray-400 w-96'>
        Pending Tasks :
      </h2>
    </div>
    <div className='flex flex-col'>
    <TaskList />
    </div>
    </div>
    <div className='w-96 mx-auto mt-20' ref={drop}>
      <h2 className='text-lg font-semibold bg-gray-400 '>
        Completed Tasks :
      </h2>
      {
        completed.map((task) => <TaskCard key={task.id} data={task} />)
      }
    </div>
    </div>
    </>
  )
}


export default App
