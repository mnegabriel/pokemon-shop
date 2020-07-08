


export async function getPackPokemon(url) {
    return new Promise( (resolve, reject ) => {
        console.log('executada função fetch')
        console.log(url)
        axios.get(url)
            //.then( res => res.json())
            .then( data => {
                resolve(data)
            })
        reject(console.log("eita"))
    })
} 