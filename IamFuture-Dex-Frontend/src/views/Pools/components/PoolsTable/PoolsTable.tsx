import React, { useRef } from 'react'
import styled from 'styled-components'
import { Button, ChevronUpIcon, Flex } from '@iamfuture/uikit'
import { useTranslation } from 'contexts/Localization'
import { Pool } from 'state/types'
import PoolRow from './PoolRow'

interface PoolsTableProps {
  pools: Pool[]
  userDataLoaded: boolean
  account: string
}

const StyledTable = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  /* border-radius: ${({ theme }) => theme.radii.card}; */

  /* background-color: ${({ theme }) => theme.card.background};
  > div:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.disabled};
  } */
`

// const StyledTableBorder = styled.div`
//   border-radius: ${({ theme }) => theme.radii.card};
//   background-color: ${({ theme }) => theme.colors.cardBorder};
//   padding: 1px 1px 3px 1px;
//   background-size: 400% 400%;
// `

const StyledTableFlex = styled.div`
  /* border-radius: ${({ theme }) => theme.radii.card};
  background-color: ${({ theme }) => theme.colors.cardBorder}; */
  padding: 1px;
  /* background-size: 400% 400%; */
`

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

const PoolsTable: React.FC<PoolsTableProps> = ({ pools, userDataLoaded, account }) => {
  const { t } = useTranslation()
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }
  return (
    <Flex flexDirection="column">
      <StyledTableFlex>
        <StyledTable role="table" ref={tableWrapperEl}>
          {pools.map((pool) => (
            <PoolRow key={pool.sousId} pool={pool} account={account} userDataLoaded={userDataLoaded} />
          ))}
        </StyledTable>
      </StyledTableFlex>
      <ScrollButtonContainer>
        <Button variant="text" onClick={scrollToTop}>
          {t('To Top')}
          <ChevronUpIcon color="primary" />
        </Button>
      </ScrollButtonContainer>
    </Flex>
  )
}

export default PoolsTable
