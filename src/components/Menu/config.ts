import { MenuEntry } from '@pancakeswap-libs/uikit'

const APWARS_URL = process.env.REACT_APP_APWARS_URL

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: `${APWARS_URL}?showFarms=true`,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: `${APWARS_URL}/farms?showFarms=true`,

    items: [
      {
        label: 'Gold Mine',
        href: `${APWARS_URL}/farms/tier/0/All?showFarms=true`,
      },
      {
        label: 'Gold Mine - Barracks',
        href: `${APWARS_URL}/farms/tier/0/Barracks?showFarms=true`,
      },
      {
        label: 'Gold Mine - Armory',
        href: `${APWARS_URL}/farms/tier/0/Armory?showFarms=true`,
      },
      {
        label: 'Gold Mine - Arcane Library',
        href: `${APWARS_URL}/farms/tier/0/ArcaneLibrary?showFarms=true`,
      },
      {
        label: 'Gold Mine - Stables - Mounted units',
        href: `${APWARS_URL}/farms/tier/0/Stables?showFarms=true`,
      },
      {
        label: 'Barracks',
        href: `${APWARS_URL}/farms/tier/1/All?showFarms=true`,
      },
      {
        label: 'Armory',
        href: `${APWARS_URL}/farms/tier/2/All?showFarms=true`,
      },
      {
        label: 'Arcane Library',
        href: `${APWARS_URL}/farms/tier/3/All?showFarms=true`,
      },
    ],
  },
  {
    label: 'Buy game items!',
    icon: 'NftIcon',
    href: 'https://app.apwars.farm',
  },
  // {
  //   label: 'Nests',
  //   icon: 'PoolIcon',
  //   href: `${APWARS_URL}/nests?showFarms=true`,
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: `${APWARS_URL}/lotter?showFarms=true`'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      // {
      //   label: 'PancakeSwap',
      //   href: 'https://pancakeswap.info/token/0x7Ab6eedd9443e0e98E5Ea93667CA5B250b8ddA51',
      // },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/goose-finance',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
      {
        label: 'Wars',
        href: 'https://app.apwars.farm/wars',
      },
      {
        label: 'AstroTools',
        href: `https://app.astrotools.io/pancake-pair-explorer/0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9`,
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/apwars/',
      },
      {
        label: 'Docs',
        href: 'https://apwars.farm/docs',
      },
      {
        label: 'Blog',
        href: 'https://www.medium.com/apwars',
      },
    ],
  },
]

export default config
