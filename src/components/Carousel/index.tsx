import { classNames, Grid, Image, List } from '@newhighsco/chipset'
import type { StaticImageData } from 'next/image'
import { type FC, type ReactNode } from 'react'

import Heading from '~components/Heading'

import styles from './Carousel.module.scss'

type Slide = {
  heading: string
  image?: StaticImageData
  logo?: boolean
  children: ReactNode
}
type Props = { slides: Slide[]; scrolling?: boolean }

export const CarouselSlide: FC<Slide> = ({
  heading,
  image,
  logo,
  children
}) => {
  return (
    <li className={styles.slide}>
      <Grid flex valign="middle" className={styles.grid}>
        <Grid.Item
          sizes={image ? ['two-thirds'] : undefined}
          className={styles.content}
        >
          <Heading as="h3">
            <small>{heading}</small>
          </Heading>
          {children}
        </Grid.Item>
        {image && (
          <Grid.Item sizes={['one-third']} className={styles.media}>
            <Image
              src={image}
              className={classNames(styles.image, logo && styles.logo)}
            />
          </Grid.Item>
        )}
      </Grid>
    </li>
  )
}

const Carousel: FC<Props> = ({ slides, scrolling }) => {
  if (!slides.length) return null

  return (
    <List unstyled className={classNames(scrolling && styles.scrolling)}>
      {slides.map(slide => (
        <CarouselSlide key={slide.heading} {...slide} />
      ))}
    </List>
  )
}

export default Carousel
