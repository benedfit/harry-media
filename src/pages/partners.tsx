import type { NextPage } from 'next'

import Carousel from '~components/Carousel'
import Heading from '~components/Heading'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import fiveSrc from '~images/5.jpg'
import destinationSportTravelLogo from '~images/destination-sport-travel.png'

const meta = { title: 'Partners' }

const CharitiesPage: NextPage = () => (
  <PageContainer meta={meta}>
    <Section>
      <Heading>{meta.title}</Heading>
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
                configuration for scrum power, heavy duty reinforced upper, and
                a wider fit. The Adidas Price RS15 FG/SG is the perfect boot for
                Backs and Speed Forwards.
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
                staff. Manages domestic and European travel, training camps, and
                corporate logistics for players, coaches, and staff. Through its
                sister company SportsBreaks, it provides official fan travel,
                hotel deals, and match tickets for away fixtures like the
                European Champions Cup.
              </p>
            )
          }
        ]}
      />
    </Section>
  </PageContainer>
)

export default CharitiesPage
