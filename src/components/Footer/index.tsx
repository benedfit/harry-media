import {
  ContentContainer,
  FooterContainer,
  Grid,
  Icon,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import { type FC } from 'react'

import config from '~config'
import footer from '~data/footer.json'

import styles from './Footer.module.scss'

const { name, socialLinks } = config
const iconLinks = {
  TikTok: { icon: 'simple-icons:tiktok' },
  Instagram: { icon: 'simple-icons:instagram' },
  YouTube: { icon: 'simple-icons:youtube' },
  X: { icon: 'simple-icons:x' }
}

const Footer: FC = () => (
  <FooterContainer theme={{ root: styles.root }}>
    <ContentContainer gutter theme={{ content: styles.content }}>
      <Grid flex valign="middle" className={styles.columns}>
        <Grid.Item>
          <Navigation
            links={footer.links}
            theme={{ link: styles.link }}
            inline
          />
        </Grid.Item>
        <Grid.Item>
          <Navigation
            links={Object.values(iconLinks)}
            renderLink={(
              { href, icon, verb = 'Follow', preposition = 'on', ...rest },
              index
            ) => {
              const key = Object.keys(iconLinks).at(index)

              return (
                <SmartLink
                  href={href ?? socialLinks[key]}
                  target="_blank"
                  {...rest}
                >
                  <Icon
                    name={icon}
                    theme={{ root: styles.icon }}
                    alt={[verb, name, preposition, key].join(' ')}
                  />
                </SmartLink>
              )
            }}
            theme={{ link: styles.iconLink }}
            inline
          />
        </Grid.Item>
      </Grid>
    </ContentContainer>
  </FooterContainer>
)

export default Footer
