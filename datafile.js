const apiKey = 'TMX1ZB13XNU619RXYAZ37PSQQDRHS95ZV5'


lastBlockHTML = document.getElementById('lastBlock')
lastBlockButton = document.getElementById("lastBlockButton")
lastBlockButton.addEventListener("click", function () {
    lastBlockNumber()
})
lastBlockNumber = async () => {
    const urlRequest = await fetch(`https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${apiKey}`)
    const data = await urlRequest.json()
    const lastBlock = await parseInt(data.result)
    document.getElementById('lastBlock').innerHTML = lastBlock
    console.log(lastBlock)
    
}

//lastBlockNumber()

lastPriceHTML = document.getElementById('lastPrice')
lastPriceButton = document.getElementById("lastPriceButton")
lastPriceButton.addEventListener("click", function () {
    lastPrice()
})
lastPrice = async () => {
    const urlRequest = await fetch(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apiKey}`)
    const data = await urlRequest.json()
    const ethToUSD = await data.result.ethusd
    document.getElementById('lastPrice').innerHTML = ethToUSD
    console.log(ethToUSD)

}
//lastPrice()

checkStatusHTML = document.getElementById('checkStatus')
checkStatusButton = document.getElementById("checkStatusButton")
checkStatusButton.addEventListener("click", function () {
    checkStatus()
})
checkStatus = async () => {
    const urlRequest = await fetch(`https://api.etherscan.io/api?module=transaction&action=getstatus&txhash=0x15f8e5ea1079d9a0bb04a4c58ae5fe7654b5b2b4463375ff7ffb490aa0032f3a&apikey=${apiKey}`)
    const data = await urlRequest.json()
    
    const error = await data.result.isError
    const errorDesription = await data.result.errDescription
    if (error === '1') {
        document.getElementById('checkStatus').innerHTML = errorDesription
        console.log(errorDesription)
    } else {
        document.getElementById('checkStatus').innerHTML = 'no error'
        console.log('no error')
    }
}
//checkStatus()

totalSupplyHTML = document.getElementById('totalSupply')
totalSupplyButton = document.getElementById("totalSupplyButton")
totalSupplyButton.addEventListener("click", function () {
    totalSupply()
})
totalSupply = async () => {
    const urlRequest = await fetch(`https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${apiKey}`)
    const data = await urlRequest.json()
    const supply = await data.result/1000000000000000000
    document.getElementById('totalSupply').innerHTML = supply
    console.log(supply)
}
//totalSupply()

