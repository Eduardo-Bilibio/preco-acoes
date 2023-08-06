/*
var empresa = String
empresa = "PETR4"
fetch("https://brapi.dev/api/quote/" + empresa).then(resposta=>{
    return resposta.json()
}).then(corpo=>{
    console.log(corpo)
    document.getElementById("valor").innerHTML=corpo.results[0].regularMarketPrice
})
*/
function puxar(){
    var empresa = document.getElementById("inome")
    fetch("https://brapi.dev/api/quote/" + empresa.value).then(resposta=>{
        return resposta.json()
    }).then(corpo=>{
        document.getElementById("empr").innerHTML=corpo.results[0].shortName
        document.getElementById("valor").innerHTML="Preço atual das ações: R$ " + corpo.results[0].regularMarketPrice
})
} 