import React from 'react'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  title: string
}

const ProductCard: React.FC<ProductCardProps> = ({ title }) => {
  return (
    <div className={styles.productCard}>
      <h3>{title}</h3>
      <p>
        Nossa solução ajuda você a alcançar {title.toLowerCase()} em suas tarefas diárias, 
        permitindo que você se concentre no que realmente importa.
      </p>
    </div>
  )
}

export default ProductCard