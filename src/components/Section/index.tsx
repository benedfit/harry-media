import { ContentContainer } from '@newhighsco/chipset'
import type { ComponentPropsWithoutRef, FC } from 'react'

import styles from './Section.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

const Section: FC<Props> = ({ children, ...rest }) => (
  <ContentContainer
    theme={{ root: styles.root, content: styles.content }}
    {...rest}
  >
    {children}
  </ContentContainer>
)

export default Section
