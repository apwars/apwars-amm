import { MenuEntry } from '@pancakeswap-libs/uikit';

const APWARS_URL = process.env.REACT_APP_APWARS_URL;


const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: `${APWARS_URL}`,
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
    href: `${APWARS_URL}/farms`,
    items: [
      {
        label: 'Gold Mine',
        href: `${APWARS_URL}/farms/tier/0`,
      },
      {
        label: 'Barracks',
        href: `${APWARS_URL}/farms/tier/1`,
      },
      {
        label: 'Armory',
        href: `${APWARS_URL}/farms/tier/2`,
      },
      {
        label: 'Arcane Library',
        href: `${APWARS_URL}/farms/tier/3`,
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
  //   href: `${APWARS_URL}/nests`,
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: `${APWARS_URL}/lotter`'
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
        href: 'https://docs.apwars.farm',
      },
      {
        label: 'Blog',
        href: 'https://www.medium.com/apwars',
      },
    ],
  },
]

export default config
