import redirects from './redirects';

let passthrough = process.env.PASSTHROUGH;
let slug = window.location.pathname;

// Use console mode to prevent redirects during development.
let consoleMode = false;

let redirected = false;

let destination = "";

function setDestination(value){
    destination = value;
    document.getElementById("redirect-location").innerHTML = destination;
    document.getElementById("redirect-button").href = destination;
}

function goNow() {
    console.log("Redirect triggered");
    window.location.replace(destination);
}

for(let i = 0; i < redirects.length; i++) {
    if(redirects[i].slug === slug || redirects[i].slug === slug  + "/") {
        redirected = true;
        setDestination(redirects[i].destination);
        console.log("redirect: ", true);
        console.log(slug);
        if(!consoleMode) {
            goNow();
        }
    }
}

if(!redirected) {
    if(!consoleMode) {
        goNow();
    }
    setDestination(passthrough + slug);
    console.log("redirect: ", "passthrough");
    console.log(passthrough);
}