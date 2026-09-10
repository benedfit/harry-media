import { ContentContainer } from '@newhighsco/chipset'
import type { ComponentPropsWithoutRef, FC } from 'react'

import {
  getBackgroundImage,
  getImage,
  ImagePreload,
  type ImageProps
} from '~components/Image'

import styles from './Section.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & { background?: ImageProps }

const Section: FC<Props> = ({
  background: { priority, ...imageProps } = {},
  children,
  ...rest
}) => {
  const background = getImage(imageProps)

  return (
    <ContentContainer
      theme={{ root: styles.root, content: styles.content }}
      style={{ '--background-image': getBackgroundImage(background) }}
      {...rest}
    >
      {priority && <ImagePreload {...background} />}
      {children}
    </ContentContainer>
  )
}

export default Section
