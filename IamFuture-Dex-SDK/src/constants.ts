import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  MAINNET = 1,
  TESTNET = 5 // Goerli
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum PairType {
  INTERNAL,
  EXTERNAL
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}
// IamFuture Factory Contract Address
export const FACTORY_ADDRESS = '0xd6023AC8516b22A7872f157736D4A954428AF198'
export const FACTORY_ADDRESS_TESTNET = '0xd6023AC8516b22A7872f157736D4A954428AF198'
// Uniswap Factory Contract Address
export const FACTORY_ADDRESS_EXTERNAL = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
export const FACTORY_ADDRESS_EXTERNAL_TESTNET = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: FACTORY_ADDRESS_TESTNET
}

export const EXTERNAL_FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS_EXTERNAL,
  [ChainId.TESTNET]: FACTORY_ADDRESS_EXTERNAL_TESTNET
}

// This is INIT CODE IamFuture FACTORY
export const INIT_CODE_HASH = '0x2cb4f3378d1cc9ebbbcbab10c7961afd100325a5c4d7e311cddd0fa9ea26c9ff'
export const INIT_CODE_HASH_TESTNET = '0x2cb4f3378d1cc9ebbbcbab10c7961afd100325a5c4d7e311cddd0fa9ea26c9ff'

// This is INIT CODE UNISWAP FACTORY
export const INIT_CODE_HASH_EXTERNAL = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'
export const INIT_CODE_HASH_EXTERNAL_TESTNET = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'

export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: INIT_CODE_HASH_TESTNET
}

export const EXTERNAL_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH_EXTERNAL,
  [ChainId.TESTNET]: INIT_CODE_HASH_EXTERNAL_TESTNET
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
