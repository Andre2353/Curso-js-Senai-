let compra = 250;

if (compra >= 200) {
    let desconto = compra * 0.20; 
    console.log(`Você teve um desconto de R$ ${desconto}. Valor final: R$ ${compra - desconto}`);
} else if (compra >= 100) {
    let desconto = compra * 0.10; 
    console.log(`Você teve um desconto de R$ ${desconto}. Valor final: R$ ${compra - desconto}`);
} else {
    console.log(`Você não atingiu o valor mínimo para desconto. Valor total: R$ ${compra}`);
}