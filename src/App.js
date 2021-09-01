import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'

function App() {
    // Show Add Task
    const [showAddTask, setShowAddTask] = useState(true)
    
    // State is immutable, call setTasks(newObject), not tasks.push(...)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor',
            day: 'Feb 1st at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Return book',
            day: 'Feb 5th at 9:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Flight to Canaries',
            day: 'Dec 31st 2001',
            reminder: true
        },
    ])
    
    const addTask = (task) =>  {
        console.log(task)
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }
    
    const deleteTask = (id) => {
        console.log('delete', id)
        setTasks(tasks.filter(t => t.id !== id));
    }
    
    const toggleReminder = (id) => {
        console.log(id)
        setTasks(tasks.map(t => t.id === id ? {...t, reminder: !t.reminder} : t))
    }
  return (
    <div className="container">
      <Header title='Tasks' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ?
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        :
            'No tasks'
        }
        
    </div>
  );
}

export default App;


