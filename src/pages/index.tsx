import type { NextPage } from 'next'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'

import Carousel from '~components/Carousel'
import Heading from '~components/Heading'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import config from '~config'
import oneSrc from '~images/1.jpg'
import twoSrc from '~images/2.jpg'
import fourSrc from '~images/4.jpg'
import fiveSrc from '~images/5.jpg'
import destinationSportTravelLogo from '~images/destination-sport-travel.png'
import homeSrc from '~images/home.jpg'
import oddballsFoundationLogo from '~images/oddballs-foundation.webp'
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
      <div className={styles.content}>
        <Heading as="h2">Career</Heading>
        <Carousel
          scrolling
          slides={[
            {
              heading: 'February 19th 2014',
              children: (
                <p>
                  Joined Leighton Buzzard Rugby Football Club (LBRFC) in his
                  home town at age 11 after his Dad and Brother.
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
                  Northampton to train at the Northampton Saints High
                  Performance Club.
                </p>
              )
            },
            {
              heading: 'September 25th 2021',
              image: twoSrc,
              children: (
                <p>
                  Aged 18 debuted for The Northampton Saints at the opening
                  match of the Gallagher Premiership Rugby League.
                </p>
              )
            },
            {
              heading: 'October 1st 2022',
              children: (
                <p>
                  At 19, became the youngest Scrum Half to score a try for
                  England in the Rugby Union World Cup.
                </p>
              )
            },
            {
              heading: 'June 8th 2024',
              children: (
                <p>
                  Price beats Bath Rugby in their last game securing the
                  Northampton Saints their first premiership win in 10 years
                  since 2014.
                </p>
              )
            }
          ]}
        />
      </div>
    </Section>
    <Section id="charities">
      <div className={styles.content}>
        <Heading as="h2">Charities</Heading>
        <Carousel
          slides={[
            {
              heading: 'Oddballs Foundation',
              image: oddballsFoundationLogo,
              logo: true,
              children: (
                <p>
                  Price has done quite allot of work for The Oddballs Foundation
                  over the years. In 2020 Price supported and raise money for a
                  The Oddballs “Check Yourself” campaign which taught men to
                  understand what is normal and how to properly check for
                  testicular cancer. Price’s campaign raised £23,293 for the
                  charity through his work and ambassador efforts for the team.
                </p>
              )
            },
            {
              heading: 'Rugby Against Cancer',
              image: fourSrc,
              children: (
                <p>
                  Price took part in The Sock Takeover, wearing custom bright
                  socks used as a visible reminder that half of all people will
                  be affected by cancer. Price has donated signed match kit and
                  shirts for fundraising auctions, and helped forge an official
                  charity partnership with Rugby Against Cancer.
                </p>
              )
            }
          ]}
        />
      </div>
    </Section>
    <Section id="partners">
      <div className={styles.content}>
        <Heading as="h2">Partners</Heading>
        <Carousel
          slides={[
            {
              heading: 'Adidas',
              image: fiveSrc,
              children: (
                <p>
                  Unleash your ambition with The ‘Price” Line. Inspired by the
                  unstoppable spirit of a true champion. The Adidas Price Kakari
                  SG the perfect shoe for Forwards featuring an 8-stud traction
                  configuration for scrum power, heavy duty reinforced upper,
                  and a wider fit. The Adidas Price RS15 FG/SG is the perfect
                  boot for Backs and Speed Forwards.
                </p>
              )
            },
            {
              heading: 'Destination Sport Travel',
              image: destinationSportTravelLogo,
              logo: true,
              children: (
                <p>
                  Manages team and business travel for the Northampton Saints,
                  handling flights, hotels, and ground logistics for players and
                  staff. Manages domestic and European travel, training camps,
                  and corporate logistics for players, coaches, and staff.
                  Through its sister company SportsBreaks, it provides official
                  fan travel, hotel deals, and match tickets for away fixtures
                  like the European Champions Cup.
                </p>
              )
            }
          ]}
        />
      </div>
    </Section>
  </PageContainer>
)

export default HomePage
