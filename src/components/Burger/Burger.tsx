import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Burger.module.scss'
import cn from 'clsx'

export const Burger = () => {
  const [active, setActive] = useState(false)

  return (
    <motion.div 
      initial={{ width: 210, height: 45 }}
      animate={{ width: active ? '95%' : 210, height: active ? '83vh' : 45  }}
      transition={{ type: 'tween' }}
      
      className={cn(styles.wrapper, {
        [styles.active]: active
      })}
      onClick={() => setActive(!active)}
    >
      <h1>Create Image</h1>

    </motion.div>
  )
}
