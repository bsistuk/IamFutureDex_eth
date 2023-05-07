import React from 'react'
import styled from 'styled-components'
import { Flex, Skeleton, FlexProps } from '@iamfuture/uikit'
import Balance from 'components/Balance'
import { Pool } from 'state/types'
import BigNumber from 'bignumber.js'

const AprLabelContainer = styled(Flex)`
  &:hover {
    opacity: 0.5;
  }
`

interface AprProps extends FlexProps {
  pool: Pool
  stakedBalance: BigNumber
  showIcon: boolean
  performanceFee?: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Apr: React.FC<AprProps> = ({ pool, stakedBalance, performanceFee = 0, ...props }) => {
  const { isFinished, rate } = pool
  // const { t } = useTranslation()

  // const [onPresentApyModal] = useModal(
  //   <RoiCalculatorModal
  //     earningTokenPrice={earningTokenPrice}
  //     stakingTokenPrice={stakingTokenPrice}
  //     stakingTokenBalance={stakedBalance.plus(stakingTokenBalance)}
  //     apr={apr}
  //     stakingTokenSymbol={stakingToken.symbol}
  //     linkLabel={t('Get %symbol%', { symbol: stakingToken.symbol })}
  //     linkHref={apyModalLink}
  //     earningTokenSymbol={earningToken.symbol}
  //     autoCompoundFrequency={autoCompoundFrequency}
  //     performanceFee={performanceFee}
  //   />,
  // )

  // const openRoiModal = (event: React.MouseEvent<HTMLElement>) => {
  //   event.stopPropagation()
  //   onPresentApyModal()
  // }
  // console.log(`earningsPercentageToDisplay`, rate)
  return (
    <AprLabelContainer alignItems="center" justifyContent="space-between" {...props}>
      {rate || isFinished ? (
        <>
          <Balance
            // onClick={openRoiModal}
            fontSize="16px"
            fontWeight="700"
            color="#00783F"
            isDisabled={isFinished}
            value={isFinished ? 0 : rate}
            decimals={2}
            unit="%"
          />
          {/* {!isFinished && showIcon && (
            <Button onClick={openRoiModal} variant="text" width="20px" height="20px" padding="0px" marginLeft="4px">
              <CalculateIcon color="textSubtle" width="20px" />
            </Button>
          )} */}
        </>
      ) : (
        <Skeleton width="80px" height="16px" />
      )}
    </AprLabelContainer>
  )
}

export default Apr
