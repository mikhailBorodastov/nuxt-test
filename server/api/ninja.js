export default defineEventHandler(async (event) => {

    // const {name} = getQuery(event)
    //
    // //handle post data
    //
    // const {age} = await readBody(event)

    //api call with private key

    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=bqiTG7RBFUIa37HwPgdH0AQnVBFvyTwb0dWHLF5d')

    return {
        data
    }
})