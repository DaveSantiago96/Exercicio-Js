function carregar() {
var img = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >=0 && hora < 12){
  //bom dia
  img.src = 'https://www.pexels.com/pt-br/foto/raios-de-sol-atraves-das-arvores-1420440/'
  document.body.style.background ='#e2cd9f'
}else if (hora >=12 && hora <18 ){
  //boa tarde
  img.src= 'https://www.pexels.com/pt-br/foto/campo-de-grama-marrom-e-verde-durante-o-por-do-sol-1237119/'
  document.body.style.background ='#b9846f'
}else{
  //boa noite
  img.src='https://www.pexels.com/pt-br/foto/arquitetura-construcao-predio-edificio-11192283/'
  document.body.style.background ='#515154'
}
}
