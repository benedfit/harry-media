import {
  ContentContainer,
  Grid,
  HeaderContainer,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import { type FC, useEffect, useRef } from 'react'

import LogoLockup from '~components/LogoLockup'
import header from '~data/header.json'

import styles from './Header.module.scss'

const Header: FC = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    if (headerRef.current) {
      const observer = new ResizeObserver(entries =>
        entries.forEach(({ contentRect }) =>
          document.documentElement.style.setProperty(
            `--header-height`,
            `${contentRect.height}px`
          )
        )
      )

      observer.observe(headerRef.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <HeaderContainer ref={headerRef} theme={{ root: styles.root }}>
      <ContentContainer gutter theme={{ content: styles.content }}>
        <Grid flex valign="middle" className={styles.columns}>
          <Grid.Item>
            <SmartLink href="/">
              <LogoLockup />
            </SmartLink>
          </Grid.Item>
          <Grid.Item>
            <Navigation
              links={header.links}
              theme={{ list: styles.links, link: styles.link }}
              inline
            />
          </Grid.Item>
        </Grid>
      </ContentContainer>
    </HeaderContainer>
  )
}

export default Header
