import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './Components/Header'
import './global.css'
import styles from './App.module.css'
import { PlusCircle, Clipboard } from 'phosphor-react'
import { Task } from './Components/Task'


export function App() {

  const [newTaskText, setNewTaskText] = useState({ name: '' });
  const isNewTaskEmpty = newTaskText.length == 0;
  const [tasksDone, setTesksDone] = useState(0);

  const [tasks, setTasks] = useState([]);




  function handleSubmitTask() {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);

    setNewTaskText({ name: '' });

  }

  function handleNewTaskChange() {
    event.target.setCustomValidity('');
    setNewTaskText({
      id: Math.random(),
      name: event.target.value,
      isOpen: true
    })



  }

  function handleNewInvalidomment() {
    event.target.setCustomValidity('Este compo eh obrigatorio');
  }

  function deleteTask(taskDelete) {

    const taskWithOutDeletedOne = tasks.filter(task => {


      return task.id != taskDelete;
    })

    setTasks(taskWithOutDeletedOne);

    
  }

  function taskFineshedCount() {
    setTesksDone(tasksDone + 1);

  }

  function renderTasks() {

    if (tasks.length === 0) {
      return (
        <div className={styles.Task}>
        <Clipboard size={56} />
      <strong>Nenhuma tarefa a ser feita</strong>

      </div>
      
      )

    }
    if (tasks.length > 0) {

      return (
        tasks.map(task => {

          return (

            <Task
              id={task.id}
              key={task.id}
              taskName={task.name}
              isOpen={task.isOpen}
              onDeleteTask={deleteTask}
              taskDonecount={taskFineshedCount}
             
            />

          )


        })

      )

    }

  }


  return (
    <div>
      <Header />
      <div>
        <form onSubmit={handleSubmitTask} className={styles.form}>

          <input
            placeholder=' Adicionar uma nova tarefa'
            name='task'
            value={newTaskText.name}
            onChange={handleNewTaskChange}
            onInvalid={handleNewInvalidomment}
            required

          />
          <button type='submit'>Criar</button>


        </form>
        <div className={styles.wrapper}>
          <main>
            <header className={styles.tasksHeader}>
              <div>
                <strong>Tarefas criadas</strong>
                <p>{tasks.length}</p>
              </div>
              <div>
                <strong>Concluidas</strong>
                <p>{tasksDone}</p>
              </div>
            </header>

            {renderTasks()}

          </main>



        </div>
      </div>
    </div >
  )
}

export default App
