import { classNames } from '@newhighsco/chipset'
import type { ElementType, FC, PropsWithChildren } from 'react'

import styles from './Heading.module.scss'

type Props = PropsWithChildren & { as?: ElementType; headline?: boolean }

const Heading: FC<Props> = ({ as: Component = 'h1', headline, children }) => (
  <Component className={classNames(styles.root, headline && styles.headline)}>
    {children}
  </Component>
)

export default Heading
