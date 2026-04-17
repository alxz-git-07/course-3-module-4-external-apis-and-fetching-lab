// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="
const STATE_ABBR=document.querySelector('#state-input').value

// Your code here!

function displayAlerts(data){
 const alerts=document.querySelector('#alerts-display') 
 const summary=document.createElement('p') 
 summary.textContent=`${data.title}:${data.features.length}`
 alerts.append(summary)
 const features=data.features
 features.forEach(feature => {
        const headlineList=document.createElement('li') 
headlineList.textContent= `${feature.properties.headline}`
 alerts.append(headlineList)
});
}

async function fetchWeatherAlerts(STATE_ABBR){
try{const responce=await fetch(`${weatherApi}${STATE_ABBR}`)
const data=await responce.json()
displayAlerts(data)

}catch(error){
    console.error('Error in fetching alerts:',error)
}
}
const form=document.querySelector(".selectCountry")

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const STATE_ABBR=document.querySelector('#state-input').value
fetchWeatherAlerts(STATE_ABBR)

})






// const form=document.querySelector('form')
// form.addEventListener('submit',(event)=>{
// event.preventDefault()
// const stateInput=document.querySelector('#state-input').value


// const stateInput=event.target.state-input.value
// })

