import React from 'react'
import styled from 'styled-components'
import { Text } from '@iamfuture/uikit'
import { Pool } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import BaseCell, { CellContent } from './BaseCell'

interface FinishCellProps {
  pool: Pool
}

const StyledCell = styled(BaseCell)`
  flex: 2 0 100px;
`

const EndsInCell: React.FC<FinishCellProps> = ({ pool }) => {
  const { lockTime, isLock, lockInfo } = pool
  const { t } = useTranslation()

  return (
    <StyledCell role="cell">
      <CellContent>
        <Text fontSize="12px" color="textSubtle" textAlign="left">
          {t('Duration (Days)')}
        </Text>
        <Text fontSize="14px" fontWeight="700">
          {isLock ? lockTime : '-'}
        </Text>
        <Text fontSize="12px" color="textSubtle">
          {lockInfo}
        </Text>
      </CellContent>
    </StyledCell>
  )
}

export default EndsInCell
