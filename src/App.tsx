import { useState } from 'react'
import { PlusCircle, CheckCircle, XCircle } from 'lucide-react'
import './App.css'

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const productFeatures = [
    {
      title: 'Simplicidade',
      description: 'Interface intuitiva que permite adicionar e gerenciar tarefas com poucos cliques, tornando o processo de organização rápido e fácil.'
    },
    {
      title: 'Flexibilidade',
      description: 'Adapte a ferramenta ao seu estilo de trabalho. Organize tarefas por projetos, prioridades ou prazos, da maneira que melhor atende às suas necessidades.'
    },
    {
      title: 'Eficiência',
      description: 'Aumente sua produtividade com lembretes automáticos, visualização clara de prazos e sincronização entre dispositivos para manter-se atualizado em qualquer lugar.'
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>Uma solução que irá te entregar produtividade</h1>
        <p>
          Você sabe que, para alcançar o sucesso, é fundamental ter parceiros que te impulsionem a ir mais longe.
        </p>
        <div className="buttons">
          <button className="primary-button">Cadastre-se</button>
          <button className="secondary-button">Veja mais</button>
        </div>
      </header>

      <main className="main">
        <h2>Agenda de Tarefas</h2>
        
        <div className="task-list">
          <div className="add-task">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Adicione uma nova tarefa"
              className="task-input"
            />
            <button
              onClick={addTask}
              className="add-button"
            >
              <PlusCircle size={24} />
            </button>
          </div>

          <ul className="tasks">
            {tasks.map(task => (
              <li key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
                <span
                  onClick={() => toggleTask(task.id)}
                  className="task-text"
                >
                  {task.text}
                </span>
                <button
                  onClick={() => toggleTask(task.id)}
                  className="toggle-button"
                >
                  <CheckCircle size={20} />
                </button>
                <button
                  onClick={() => removeTask(task.id)}
                  className="remove-button"
                >
                  <XCircle size={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <section className="products">
          <h2>Sob medida para você</h2>
          <p>
            Inovação é com a gente! A nossa empresa já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar:
          </p>
          <div className="product-grid">
            {productFeatures.map((feature, index) => (
              <div key={index} className="product-card">
                <div className="product-icon">
                  <CheckCircle size={48} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App