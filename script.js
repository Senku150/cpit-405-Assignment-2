async function API() {
    
    const divResultElem= document.getElementById("result")
    const city =selecterElem.value
    console.log(city)
    const call = `https://api.weatherapi.com/v1/current.json?key=57e21c1b43d24011a56183658242410&q=${city}&aqi=no`
    const response = await fetch(call); 
    const model = await response.json()
    const time=model.location.localtime.split(" ")[1];
    divResultElem.innerHTML= `<ul><li>Time: ${time}</li><li>Temp: ${model.current.temp_c} c&deg;</li><li>Wind Speed: ${model.current.wind_kph} kph</li></ul>`
}
const selecterElem =document.getElementById("city-name")
selecterElem.addEventListener("change",API)


API() //call this so that there will be no empty border when first visited