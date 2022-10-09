
import styles from './Task.module.css'
import { CheckCircle, Trash, Circle } from 'phosphor-react'
import { useState } from 'react';

export function Task({ id, taskName,isOpen, onDeleteTask, taskDonecount }) {

    function handleDeleteTask() {
        onDeleteTask(id);
      

        
    }
    function handleDoneTask() {
        setIsOpen(false);
        taskDonecount();
       
    }

    const [isOpen2, setIsOpen] = useState(isOpen);
    

    return (

        <div className={styles.Task}>
            <div>

                <button onClick={handleDoneTask} className={styles.check}
                    disabled={isOpen2 == false}>
                    {isOpen2 ? <Circle size={24} /> : <CheckCircle size={24} />}
                </button>

                <strong
                    className={isOpen2 ? styles.taskOpen2 : styles.taskDone}>

                    {taskName}

                </strong>

            </div>

            
            
            <button onClick={handleDeleteTask} className={styles.trash} title='deletar tarefa'>

                <Trash size={30} />
            </button>




        </div>



    );
}