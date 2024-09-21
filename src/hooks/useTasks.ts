import { useState } from 'react'

export const useTasks = () => {
  const [tasks, setTasks] = useState<string[]>([])

  const addTask = (task: string) => {
    setTasks([...tasks, task])
  }

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return { tasks, addTask, removeTask }
}