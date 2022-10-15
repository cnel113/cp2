document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    let colorField = document.getElementById('hue-selector');
    let selectedHue = colorField.options[colorField.selectedIndex].value;
    let amountField = document.getElementById('amount-selector');
    let numColors = amountField.options[amountField.selectedIndex].value; //watch for issues with it being a number not a string, might have to define it
    let light = document.getElementById('light').checked;
    let dark = document.getElementById('dark').checked;
    
    const box = document.getElementById('colorResults');
    box.innerHTML = ""; 
    
    let url ="https://x-colors.herokuapp.com/api/random";
    
    if (selectedHue != "random") {
        url += "/" + selectedHue;
    }
    url += "?number=" + numColors;
    
    if (light === true && dark === false) { //doesn't work with random as hue
        url += "&type=light";
    }
    else if (light === false && dark === true) { //doesn't work with random as hue
        url += "&type=dark";
    }
    
    fetch(url) 
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
            for (let i = 0; i < numColors; i++){
                let color = ""
                if (numColors === "1") {
                    color = json.hex;
                }
                else {
                    color = json[i].hex;
                }
                let el = document.createElement('div');
                el.classList.add('color-block');
                el.style.backgroundColor = color;
                box.appendChild(el);
            }
        });
            
    });


