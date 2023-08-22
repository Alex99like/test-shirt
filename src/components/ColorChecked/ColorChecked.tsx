import { useActions } from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'
import styles from './ColorChecked.module.scss'
import cn from 'clsx'

const colors = ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934']

export const ColorChecked = () => {
  const { color } = useAppSelector(state => state.root)
  const { changeColor } = useActions()

  return (
    <div className={styles.wrapper}>
      {colors.map(el => (
        <span 
          className={cn(styles.item, {
            [styles.active]: el === color
          })} 
          key={el} 
          style={{ backgroundColor: el }}
          onClick={() => changeColor({ color: el })}
        >
        </span>
      ))}
    </div>
  )
}
