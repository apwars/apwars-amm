const tokenAddress: string = process.env.REACT_APP_TOKEN_ADDRESS || '';
const busdAddress: string = process.env.REACT_APP_BUSD_ADDRESS || '';
const lpAddress: string = process.env.REACT_APP_TOKEN_LP_ADDRESS || '';

const priceContracts: {cakeAddress: string, busdAddress: string, lpAddress:string} = {
  cakeAddress: tokenAddress,
  busdAddress,
  lpAddress
}

export default priceContracts