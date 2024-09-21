import React, { useState } from 'react'
import styles from './TaskList.module.css'
import { useTasks } from '../../hooks/useTasks'

const TaskList: React.FC = () => {
  const { tasks, addTask, removeTask } = useTasks()
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask.trim())
      setNewTask('')
    }
  }

  return (
    <div className={styles.taskList}>
      <h2>Agenda de Tarefas</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          placeholder="Nova tarefa"
        />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList