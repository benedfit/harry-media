import Head from 'next/head'
import { getImageProps, type ImageProps as NextImageProps } from 'next/image'
import React, { type FC } from 'react'

export type ImageProps = Partial<NextImageProps> & { srcSet?: string }

const getCssUrl = (url: string) => `url("${url}")`

export const getImage = (props: ImageProps) =>
  props?.src ? getImageProps(props as NextImageProps).props : undefined

export const getBackgroundImage = (props: ImageProps) => {
  if (typeof props === 'string') return getCssUrl(props)

  const { srcSet } = props ?? {}

  const imageSet = srcSet
    ?.split(',')
    .map(src => {
      const [url, dpi] = src.trim().split(' ')

      return [getCssUrl(url), dpi].join(' ').trim()
    })
    .join(',')

  return imageSet ? `image-set(${imageSet})` : undefined
}

export const ImagePreload: FC<ImageProps> = ({
  src,
  srcSet,
  sizes,
  crossOrigin,
  referrerPolicy,
  fetchPriority
}) => {
  return (
    <Head>
      <link
        key={['__nimg-', src, srcSet, sizes].join('')}
        as="image"
        rel="preload"
        href={srcSet ? undefined : (src as string)}
        imageSrcSet={srcSet}
        imageSizes={sizes}
        crossOrigin={crossOrigin}
        referrerPolicy={referrerPolicy}
        fetchPriority={fetchPriority}
      />
    </Head>
  )
}
