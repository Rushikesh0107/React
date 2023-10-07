import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './taskCard'
import { useEffect } from 'react'

function TaskList() {

    const {tasks} = useSelector((state) => state.task)

  return (
    <>
    {
        tasks.map((task) => <TaskCard data={task} />)
    }
    </>
  )
}

export default TaskList