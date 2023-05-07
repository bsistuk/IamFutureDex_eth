import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'IamFutureSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by IamFutureSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('IamFutureSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('IamFutureSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('IamFutureSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('IamFutureSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('IamFutureSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('IamFutureSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('IamFutureSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('IamFutureSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('IamFutureSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('IamFutureSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('IamFutureSwap')}`,
      }
    default:
      return null
  }
}
