//  export const GetApi1 =async () => {
//      try {
//          const datos1 = await fetch ("https:cataas.com/cat/says/hello").then(res=>res.json())
//          console.log(datos1)
//          return datos1.url
//      } catch (error) {
//          console.error(error)
//      }
    


export const GetApi2 =async () => {
    try {
        const datos2 = await fetch ("https://catfact.ninja/fact").then(res=>res.json())
        console.log(datos2)
        return datos2
    } catch (error) {
        console.error(error)
    }
    
}