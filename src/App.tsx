import React from 'react'
import TaskList from './components/TaskList'
import CompletedTask from './components/CompletedTask'

const App:React.FC  = () => {
  return (
    <>
    <TaskList/>
    <CompletedTask/>
    <div className='todo_app_section'>

      <div className='todo_app_container'>

        <div className='new_task_list task_list'>
          <h2>Task List</h2>
        </div>
        <TaskList/>
      </div>
    </div>


<div>

<div>
  <div className='completed_task_list task_listq'> Completed Task</div>
  <div>
    <CompletedTask/>
  </div>

</div>
</div>

    </>
  )
}

export default  App