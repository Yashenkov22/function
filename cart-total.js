
function calculate(basketSumm, countGoods, promo = null) {
  totalSumm = basketSumm;
  if (promo = 'ДАРИМ300') {
    totalSumm <= 300 ? totalSumm = 0 : totalSumm -= 300;
    console.log(`Сумма: ${totalSumm}`);
  }
  
  if (countGoods >= 10) {
    const fiveProcent = totalSumm / 100 * 5;
    totalSumm -= fiveProcent;
    console.log(`Сумма(-5%): ${totalSumm}`);
  }
  if (totalSumm > 50000) {
    const rangeSumm = totalSumm - 50000;
    const twentyProcent = rangeSumm / 100 * 20;
    totalSumm -= twentyProcent;
    console.log(`Сумма(-20%): ${totalSumm}`);
  }
  if (promo = 'ДАРИМ15' && totalSumm >= 20000) {
    const fiveteenProcent = totalSumm /100 * 15;
    totalSumm -= fiveteenProcent;
    console.log(`Сумма(-15%): ${totalSumm}`);
  }
}

calculate(100300, 1)