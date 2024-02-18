const teplotaF = Number(prompt("Zadej teplotu v stupních Fahrenheita °F:"))
const teplotaC = Math.round((5*(teplotaF-32))/9)

document.body.innerHTML = + teplotaC +" "+ "°C" 