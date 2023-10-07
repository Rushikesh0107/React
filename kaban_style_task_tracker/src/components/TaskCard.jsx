import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {useDrag} from 'react-dnd'
import { removeTask, editTask } from '../features/TaskSlice'

function taskCard({data}) {
    const {tasks} = useSelector((state) => state.task)
    const [time, setTime] = React.useState(0);
    const [running, setRunning] = React.useState(false);
    const [{isDragging}, drag] = useDrag(() => ({
        type: "task",
        item: {id: data.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const dispatch = useDispatch()

    const handleEdit = () => {
        const title = prompt("Enter Title")
        const description = prompt("Enter Description")
        dispatch(editTask({id: data.id, title: title, description: description}))
    }


    useEffect(() => {
        let interval = null;
        if(running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            }, 10)
        }else if(!running) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [running])
  return (
    <>
    {
        tasks.map((task) => task.id === data.id ? 
        (<div className="flex flex-col justify-center items-center w-96 bg-blue-950 shadow text-white rounded p-3 my-3" key={task.id} ref = {drag}>
        <div className="flex flex-row justify-between w-full " key={task.description}>
            <h3 className="text-2xl font-semibold">
                {task.title}
                </h3>
            <div className='flex  gap-2'>

            <button className='bg-green-500 text-xl text-white font-semibold float-right transition-all rounded-sm px-4 active:scale-75'
            onClick={() => handleEdit()}
            >
                Edit
                </button>

            <button className="text-2xl text-white font-semibold float-right bg-red-600 hover:bg-red-700 transition-all rounded-sm px-3 active:scale-75"
            onClick={() => dispatch(removeTask(task.id))}
            >
                X
                </button>
            </div>
        </div>
        
        <div className='flex w-full'>
        <p className="text-lg">{task.description}</p>
        </div>

        <div className='text-lg'>
            <span>
                {("0" + Math.floor((time/3600000) % 24)).slice(-2)}:
                <span>
                    {("0" + Math.floor((time/60000) % 60)).slice(-2)}:
                    <span>
                        {("0" + Math.floor((time/1000) % 60)).slice(-2)}:
                        <span>
                            {("0" + ((time/10) % 100)).slice(-2)}
                        </span>
                    </span>
                </span>
            </span>
        </div>

        <div className='flex gap-5 mt-2'>
            {running ? (
            <>
            <button className='bg-white text-blue-900 font-bold px-2 rounded active:scale-75 hover:bg-blue-100 transition-all'
            onClick={() => setRunning(false)}
            >
                Stop
                </button>
            </>
            ) : 
            (
                <>
                <button className='bg-white text-blue-900 font-bold px-2 rounded active:scale-75 hover:bg-blue-100 transition-all'
                onClick={() => setRunning(true)}
                >
                    Start
                    </button>
                </>
            )
            }

            <button className='bg-white text-blue-900 font-bold px-2 rounded active:scale-75 hover:bg-blue-100 transition-all'
            onClick={() => setTime(0)}
            >
                Reset
                </button>
        </div>
    </div>
        ) : null)
    }
    </>
  )
}


export default taskCard