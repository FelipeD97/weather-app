

const apiKey = "ee3f96a31171485986b21238232501"
const u = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Paris`

let get = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(data => data);
        
}

let temp = get(u)

console.log(temp[1])


const getWeather = () => {

}


const temperatures = {
    hot: [],
    warm: [],
    cool: [],
    cold: [],
    veryCold: []
}

const getOutfit = () => {

}