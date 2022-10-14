document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    let colorField = document.getElementById('hue-selector');
    let selectedHue = colorField.options[colorField.selectedIndex].value;
    let amountField = document.getElementById('amount-selector');
    let numColors = amountField.options[amountField.selectedIndex].value; //watch for issues with it being a number not a string, might have to define it
    let light = document.getElementById('light').checked;
    let dark = document.getElementById('dark').checked;
    
    let url ="https://x-colors.herokuapp.com/api/random";
    
    if (selectedHue != "random") {
        url += "/" + selectedHue;
    }
    
    if (light === true && dark === false) {
        url += "?type=light";
    }
    else if (light === false && dark === true) {
        url += "?type=dark";
    }
    
    if (numColors > 1) {
        url += "&number=" + numColors;
    }
    
        
    
    fetch(url) 
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        
        for (let i = 0; i < numColors; i++){
        
        }
        //let results = "";
        let color = json.hex;
        //const element =  document.querySelector('color-block');
        /*results += '<div class="color-block"><div>';*/
        //element.style.backgroundColor = color;
        const element = document.getElementById("block-1");
        element.style.backgroundColor = color;
        /*results += '<div class="current-secondary-results">'; 
        results += '<p> <b>' + json.clouds.all + '%</b> cloudy</p>'
        results += '<p> <b>' + json.main.humidity + '%</b> humidity</p>'
        results += '<p> <b>' + json.main.pressure + '</b> pressure</p>'
        results += '<p> <b>' + json.wind.speed + '</b> mph wind</p>'
        results += '<p> Feels like <b>' + json.main.feels_like + "</b> &deg;F</p>"
        results += '</div>'
        */
        
        //document.getElementById("colorResults").innerHTML = results;
        });
            
        //document.getElementById("").innerHTML = "";
    });


