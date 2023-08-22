import { PropsWithChildren } from "react"
import styles from './Layout.module.scss'
import { ColorChecked } from "../../components/ColorChecked/ColorChecked"
import { Burger } from "../../components/Burger/Burger"
import { Provider } from 'react-redux'
import { store } from "../../store"
import { AnimatePresence } from "framer-motion"

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className={styles.wrapper}>
      <Provider store={store} >
        <AnimatePresence>
          <Burger />
          {children}
          <ColorChecked />
        </AnimatePresence>
      </Provider>
    </main>
  )
}
