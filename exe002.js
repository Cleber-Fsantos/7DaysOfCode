

let resSimNao;

const nome = prompt("Qual é o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
let linguagem2;
const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
alert(msg);


resSimNao = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO`);

if(resSimNao == 1){
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
}else{
  resSimNao = prompt("Ahh que pena... Já tentou aprender outras linguagens? Responda com 1 para SIM ou 2 para NÃO");
  if(resSimNao == 1){
    linguagem2 = prompt("Ahh bacana... E qual linguagem você tentou aprender?");
    alert(`Boaaa, ${linguagem2} realmente é uma ótima linguagem de programação!!!`);
  } else{
    alert("Hummm, pesquise por outras linguagens e veja qual lhe agrada mais!");
  }
}

