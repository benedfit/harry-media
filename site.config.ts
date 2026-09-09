import logoBitmap from '~images/logo.png'
import logoVector from '~images/logo.svg'
import openGraphImage from '~images/sharing.jpg'
import colors from '~styles/colors.module.scss'

const config = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  name: 'Tristan Price',
  shortName: null,
  title: 'Offical website of Tristan Price',
  description: 'TODO:',
  logo: { bitmap: logoBitmap.src, vector: logoVector },
  openGraphImage: openGraphImage.src,
  themeColor: colors.black,
  twitterHandle: 'TODO:',
  socialLinks: { Instagram: '#', X: '#' }
}

export default config
