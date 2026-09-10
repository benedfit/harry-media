import { Grid, Image } from '@newhighsco/chipset'
import type { NextPage } from 'next'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import React from 'react'

import Heading from '~components/Heading'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import config from '~config'
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
    <Section>
      <Grid flex gutterless reverse valign="middle" className={styles.grid}>
        <Grid.Item sizes="one-half">
          <Heading headline>
            <small>Tristan</small> Price
          </Heading>
        </Grid.Item>
        <Grid.Item sizes="one-half">
          <Image src={homeSrc} priority />
        </Grid.Item>
      </Grid>
    </Section>
    <Section id="career">
      <Heading as="h2">
        Career <small>Coming soon</small>
      </Heading>
    </Section>
    <Section id="charity">
      <Heading as="h2">
        Charity <small>Coming soon</small>
      </Heading>
    </Section>
    <Section id="partners">
      <Heading as="h2">
        Partners <small>Coming soon</small>
      </Heading>
    </Section>
  </PageContainer>
)

export default HomePage
