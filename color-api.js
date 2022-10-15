document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    let colorField = document.getElementById('hue-selector');
    let selectedHue = colorField.options[colorField.selectedIndex].value;
    let amountField = document.getElementById('amount-selector');
    let numColors = amountField.options[amountField.selectedIndex].value;
    let light = document.getElementById('light').checked;
    let dark = document.getElementById('dark').checked;
    
    const box = document.getElementById('colorResults');
    box.innerHTML = ""; 
    
    let url ="https://x-colors.herokuapp.com/api/random";
    
    if (selectedHue != "random") {
        url += "/" + selectedHue;
    }
    else {
        url += "/all";
    }
    url += "?number=" + numColors;
    
    if (light === true && dark === false) {
        url += "&type=light";
    }
    else if (light === false && dark === true) {
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
                let chip = document.createElement('div');
                chip.classList.add('color-chip');
                let el = document.createElement('div');
                el.classList.add('color-block');
                el.style.backgroundColor = color;
                chip.appendChild(el);
                let text = document.createElement('p');
                text.innerHTML = color;
                chip.appendChild(text);
                box.appendChild(chip);
            }
        });
            
    });


