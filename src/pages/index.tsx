import { Grid, Image, Prose } from '@newhighsco/chipset'
import type { NextPage } from 'next'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import React from 'react'

import PageContainer from '~components/PageContainer'
import config from '~config'
import homeSrc from '~images/home.jpg'
import { canonicalUrl } from '~utils/url'

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
    <Grid flex gutterless reverse valign="middle">
      <Grid.Item sizes="one-half">
        <Prose>
          <h1>{name}</h1>
        </Prose>
      </Grid.Item>
      <Grid.Item sizes="one-half">
        <Image src={homeSrc} priority />
      </Grid.Item>
    </Grid>
  </PageContainer>
)

export default HomePage
