import Menu from "../Menu";
import Week from "../Week";
import s from './style.module.css'
import React, { useState } from 'react'

function App() {
  const week = [
    { value: 'Mn', label: 'Monday' },
    { value: 'Tu', label: 'Tuesday' },
    { value: 'We', label: 'Wednesday' },
    { value: 'Th', label: 'Thursday' },
    { value: 'Fr', label: 'Friday' },
    { value: 'Sa', label: 'Saturday' },
    { value: 'Su', label: 'Sunday' }

  ]
  const [tasks, setTasks] = useState([]);

  const createTask = (e) => {
    e.preventDefault();

    let day = e.target.selectDay.value;
    let priority = e.target.selectPriority.value;
    let description = e.target.description.value;
  
    let taskObj = {
      id: Date.now(),
      day,
      priority,
      description
    }
    setTasks([...tasks,taskObj])
    
    e.target.selectDay.value='';
    e.target.selectPriority.value='';
    e.target.description.value='';

  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className={s.wrapper}>
      <Menu week={week} createTask={createTask}/>
      <Week deleteTask={deleteTask} tasks={tasks} mn={week[0].value} tu={week[1].value}
      we={week[2].value} th={week[3].value} fr={week[4].value}
      sa={week[5].value} su={week[6].value}/>
    </div>
  );
}

export default App;
