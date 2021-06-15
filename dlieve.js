
var meubotao = document.getElementsByTagName('input')[4]
document.oncopy = function(e){
if(meubotao.value < 1){
    if(e.target.textContent.length == 7){
    meubotao.value += `${e.target.textContent}`
    }
}else{
if(e.target.textContent.length == 7)
meubotao.value += `/${e.target.textContent}`
meubotao.select()
document.execCommand('copy')
}}

document.body.addEventListener('keyup', (e)=>{
    if(e.keyCode == 13){
        meubotao.value = ""
    }
})
