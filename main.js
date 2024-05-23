import Jatekter from "./Jatekter.js";


const lista=[false,false,false,true,true,true,false,false,false];
new Jatekter(lista);

$(window).on("kapcsolas", (event) => {
    console.log(event.detail)

});