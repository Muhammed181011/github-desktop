// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
// Personal API Key for OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=6e5236042ef11a55f138fbaaf71850a4&units=imperial';

// Event listener to add function to existing HTML DOM element
const generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', showWeatherData);

/* Function called by event listener */
function showWeatherData(){
    const zip = document.querySelector('#zip').value;
    const content = document.querySelector('#feelings').value;
    getWeatherData(baseURL,zip,apiKey)
    .then(function(data){
        postData('/addData',{temp: data.main.temp, date: newDate, content: content})
        .then(retrieveData('/all'))
    })
};

/* Function to GET Web API Data*/
const getWeatherData = async (baseURL,zip,apiKey)=>{
    const request = await axios.get(baseURL+zip+apiKey)
    try{
        console.log(request.data)
        return request.data
    }
    catch(error){
       console.log('error',error)
    }
};

/* Function to POST data */
const postData = async(url='', data={})=>{
    try{
        const response = await axios.post(url,data);
        return response.data
    }
    catch(error){
       console.log('error',error)
    }
};

/* Function to GET Project Data */
const retrieveData = async(url='')=>{
    const request = await axios.get(url);
    try{
        document.querySelector('#date').innerHTML=request.data.date;
        document.querySelector('#temp').innerHTML = Math.round(request.data.temp)+ ' degrees';
        document.querySelector("#content").innerHTML=request.data.content;
    }
    catch(error){
        console.log(error,'error');
    }
};