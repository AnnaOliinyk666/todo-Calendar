
import Select from 'react-select'
import s from './style.module.css'

export default function Menu({week,createTask}) {
   
      
      const importance = [
        { value: 'high', label: 'High' },
        { value: 'medium', label: 'Medium' },
        { value: 'low', label: 'Low' }
        
      ]
      
      
      
      const WeekComponent = () => (
        <Select name='selectDay'  options={week} />
      )
      const TaskComponent = () => (
        <Select name='selectPriority' options={importance} />
      )
  return (
    <form onSubmit={(e)=>createTask(e)}>
        <div className={s.select}>
            
            <div>
                <p>Day</p>
                <WeekComponent/>
            </div>
            <div>
                <p>Task</p>
                <div className={s.input}>
                    <input name='description' type="text" placeholder='task' />
                    <button>add</button>
                </div>
            </div>
            
            <div>
                <p>Importance</p>
                <TaskComponent/>
            </div>
            
        </div>
    </form>
  )
}
