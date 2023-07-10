// Taxas de conversão
const USD_TO_BRL = 5.23;
const BRL_TO_USD = 1 / USD_TO_BRL;

// Função para converter de dólar para real
function usdToBrl(amount: number): number {
  return amount * USD_TO_BRL;
}

// Função para converter de real para dólar
function brlToUsd(amount: number): number {
  return amount * BRL_TO_USD;
}

// Exemplos de uso
const usdAmount = 100;
const brlAmount = 500;

console.log(`${usdAmount} dólares são equivalentes a ${usdToBrl(usdAmount)} reais.`);
console.log(`${brlAmount} reais são equivalentes a ${brlToUsd(brlAmount)} dólares.`);
