const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var teth = document.getElementById("tether");
var lite = document.getElementById("litecoin");
var sol = document.getElementById("solana");
var car = document.getElementById("cardano");
var cos = document.getElementById("cosmos");
var uni = document.getElementById("uniswap");
var dash = document.getElementById("das");
var cash = document.getElementById("zcash");
var iota = document.getElementById("iot");




menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

var setting = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Clitecoin%2Ciota%2Ctether%2Csolana%2CZcash%2Cdash%2Ccosmos%2Ccardano%2Cuniswap&vs_currencies=inr",
    "headers": {}
}

$.ajax(setting).done(function (response){
    btc.innerHTML = response.bitcoin.inr;
    eth.innerHTML = response.ethereum.inr;
    teth.innerHTML = response.tether.inr;
    doge.innerHTML = response.dogecoin.inr;
    lite.innerHTML = response.litecoin.inr; 
    sol.innerHTML = response.solana.inr;
    car.innerHTML = response.cardano.inr;
    cos.innerHTML = response.cosmos.inr;
    uni.innerHTML = response.uniswap.inr;
    dash.innerHTML = response.dash.inr;
    cash.innerHTML = response.zcash.inr;
    iota.innerHTML = response.iota.inr;


})