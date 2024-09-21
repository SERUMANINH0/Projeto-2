import React from 'react'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Uma solução que irá te entregar produtividade</h1>
      <p>
        Você sabe que, para alcançar o sucesso, é fundamental ter parceiros que te impulsionem a ir mais longe.
      </p>
      <div className={styles.buttons}>
        <button className={styles.primaryButton}>Cadastre-se</button>
        <button className={styles.secondaryButton}>Veja mais</button>
      </div>
    </header>
  )
}

export default Header