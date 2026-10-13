import type { NextPage } from 'next'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'

import Carousel from '~components/Carousel'
import Heading from '~components/Heading'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import config from '~config'
import oneSrc from '~images/1.jpg'
import twoSrc from '~images/2.jpg'
import homeSrc from '~images/home.jpg'
import { canonicalUrl } from '~utils/url'

import styles from './index.module.scss'

const { name, title, logo, socialLinks, url } = config
const meta = { canonical: canonicalUrl(), customTitle: true, title }

const HomePage: NextPage = () => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd
      type="Organization"
      name={name}
      url={url}
      sameAs={Object.values(socialLinks)}
    />
    {logo?.bitmap && <LogoJsonLd url={url} logo={canonicalUrl(logo.bitmap)} />}
    <Section
      background={{ src: homeSrc, priority: true, fetchPriority: 'high' }}
      className={styles.hero}
    >
      <Heading headline>
        <small>Tristan</small> Price
      </Heading>
    </Section>
    <Section id="career">
      <Heading as="h2">Career</Heading>
      <Carousel
        scrolling
        slides={[
          {
            heading: 'February 19th 2014',
            children: (
              <p>
                Joined Leighton Buzzard Rugby Football Club (LBRFC) in his home
                town at age 11 after his Dad and Brother.
              </p>
            )
          },
          {
            heading: 'October 21st 2019',
            image: oneSrc,
            children: (
              <p>
                Scouted at a match and placed into Northampton Saints apart of
                the Developing Player Program (DPP).
              </p>
            )
          },
          {
            heading: 'November 2019',
            children: (
              <p>
                Joined Northampton Saints U16 Academy team and moved to
                Northampton to train at the Northampton Saints High Performance
                Club.
              </p>
            )
          },
          {
            heading: 'September 25th 2021',
            image: twoSrc,
            children: (
              <p>
                Aged 18 debuted for The Northampton Saints at the opening match
                of the Gallagher Premiership Rugby League.
              </p>
            )
          },
          {
            heading: 'October 1st 2022',
            children: (
              <p>
                At 19, became the youngest Scrum Half to score a try for England
                in the Rugby Union World Cup.
              </p>
            )
          },
          {
            heading: 'June 8th 2024',
            children: (
              <p>
                Price beats Bath Rugby in their last game securing the
                Northampton Saints their first premiership win in 10 years since
                2014.
              </p>
            )
          }
        ]}
      />
    </Section>
  </PageContainer>
)

export default HomePage
