
//VERIFICAR PELA IDADE, SE O VOTO É OBRIGATORIO, OPCINAL OU NÃO VOTA!
//IDADE > 18 -> VOTO É OBRIGATORIO 
// IDADE < 16 -> NÃO VOTA
// IDADE >- 16 < 18 -> VOTO OPCIONAL

let idade = 70

if(idade < 16){
    console.log("Não vota!")
}else if(idade >= 65 || idade < 18 ){
    console.log("Voto opcional")
}
else{
    console.log("Voto OBRIGATORIO!")
}
