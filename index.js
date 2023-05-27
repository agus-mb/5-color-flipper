const reset= document.getElementById('reset');
const generate= document.getElementById('generate');
const mostrarColor= document.querySelector('.color-hex');

const hex = [1,2,3,4,5,6,7,8,9, "A", "B", "C","D","E","F" ];

const randomNumber = () => {
    return Math.floor(Math.random() * hex.length);
} 

const resetACero =() =>{
    return Math.floor(0* hex.lenght);
}

document.addEventListener('click', empezadoPor=>{
if (empezadoPor.target === generate){
    let color= "#";
    for(let i= 0; i< 6;i++){
        color+=hex[randomNumber()]
    }

    mostrarColor.innerHTML=color; /*aca le mandamos el texto al spam que mostrara los numeros generados*/
    document.body.style.background=color; /*aca modificamos la propiedad background del body y le mandamos los numeros generados*/
}

else if(empezadoPor.target === reset){
mostrarColor.innerHTML='#3f3f3f';
document.body.style.background='#3f3f3f';
}
})
