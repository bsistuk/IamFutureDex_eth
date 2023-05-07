import { MenuEntry } from '@iamfuture/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: t('Exchange'),
  //   icon: 'TradeIcon',
  //   href: '/swap',
  // },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        icon: 'ExchangeIcon',
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        icon: 'LiquidityIcon',
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('More Products'),
    icon: 'MoreFutureIcon',
    items: [
      {
        label: t('Wallet'),
        icon: 'WalletIcon',
        href: '#1',
      },
      {
        label: t('Forecaster'),
        icon: 'ForecasterIcon',
        href: '#',
      },
      {
        label: t('Marketplace'),
        icon: 'MarketplaceIcon',
        href: '#3',
      },
    ],
  },
]

export default config
