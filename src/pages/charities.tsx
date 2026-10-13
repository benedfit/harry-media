import type { NextPage } from 'next'

import Carousel from '~components/Carousel'
import Heading from '~components/Heading'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import fourSrc from '~images/4.jpg'
import oddballsFoundationLogo from '~images/oddballs-foundation.webp'

const meta = { title: 'Charities' }

const CharitiesPage: NextPage = () => (
  <PageContainer meta={meta}>
    <Section>
      <Heading>{meta.title}</Heading>
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
                socks used as a visible reminder that half of all people will be
                affected by cancer. Price has donated signed match kit and
                shirts for fundraising auctions, and helped forge an official
                charity partnership with Rugby Against Cancer.
              </p>
            )
          }
        ]}
      />
    </Section>
  </PageContainer>
)

export default CharitiesPage
