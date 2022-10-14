document.getElementById("amountSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("colorAmount").value;
    if (value == "")
        return;
    console.log(value);
    const url ="https://x-colors.herokuapp.com/api/random";
    fetch(url) 
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
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


