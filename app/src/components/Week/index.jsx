
import s from './style.module.css'

export default function Week({mn,tu,we,th,fr,sa,su,tasks,deleteTask}) {     
    console.log(tasks)
    
        
    
  return (
    <div className={s.wrapper}>
        <div >
            <h4>{mn}</h4>
            <div>
                {
                    tasks.map((one)=>{
                            if (one.day==="Mn") {
                                return <div className={s.card}><li id={one.priority}>{one.description}</li> <button onClick={()=>deleteTask(one.id)}>V</button></div>
                            }
                    })
                }
            </div>
        </div>
        <div >
            <h4>{tu}</h4>
            <div>
                {
                    tasks.map((one)=>{
                            if (one.day==="Tu") {
                                return <div className={s.card}><li id={one.priority}>{one.description}</li> <button onClick={()=>deleteTask(one.id)}>V</button></div>
                            }
                    })
                }
            </div>
            
        </div>
        <div >
            <h4>{we}</h4>
            <div>
                {
                    tasks.map((one)=>{
                            if (one.day==="We") {
                                return <div className={s.card}><li id={one.priority}>{one.description}</li> <button onClick={()=>deleteTask(one.id)}>V</button></div>
                            }
                    })
                }
            </div>
            
        </div>
        <div >
            <h4>{th}</h4>
            <div>
                {
                    tasks.map((one)=>{
                            if (one.day==="Th") {
                                return <div className={s.card}><li id={one.priority}>{one.description}</li> <button onClick={()=>deleteTask(one.id)}>V</button></div>
                            }
                    })
                }
            </div>
        </div>
        <div >
            <h4>{fr}</h4>
            <div >
                {
                    tasks.map((one)=>{
                            if (one.day==="Fr") {
                                return <div className={s.card}><li id={one.priority}>{one.description}</li> <button onClick={()=>deleteTask(one.id)}>V</button></div>
                            }
                    })
                }
            </div>
        </div>
        <div>
            <h4>{sa}</h4>
            <div >
                {
                    tasks.map((one)=>{
                            if (one.day==="Sa") {
                                return <div className={s.card}><li id={one.priority}>{one.description}</li> <button onClick={()=>deleteTask(one.id)}>V</button></div>
                            }
                    })
                }
            </div>
        </div>
        <div>
            <h4>{su}</h4>
            <div >
                {
                    tasks.map((one)=>{
                            if (one.day==="Su") {
                                return <div className={s.card}><li id={one.priority}>{one.description}</li> <button onClick={()=>deleteTask(one.id)}>V</button></div>
                            }
                    })
                }
            </div>
        </div>
    </div>
  )
}
