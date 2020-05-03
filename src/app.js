import redirects from './redirects';

let passthrough = process.env.PASSTHROUGH;
let slug = window.location.pathname;

let redirected = false;

for(let i = 0; i < redirects.length; i++) {
    if(redirects[i].slug === slug || redirects[i].slug === slug  + "/") {
        redirected = true;
        console.log("redirect: ", true);
        console.log(slug);
        window.location.replace(redirects[i].destination);
    }
}

if(!redirected) {
    window.location.replace(passthrough + slug);
    console.log("redirect: ", "passthrough");
    console.log(passthrough);
}