import { ContextApi } from 'contexts/Localization/types'
import { PageBreadcrumb } from './types'

export const DEFAULT_META: PageBreadcrumb = {
  title: 'Exchange',
  subtitle: 'Swap',
  description: 'Make a swap at no cost',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageBreadcrumb => {
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
