const tipCalculator = (sum,percentage) =>{
  
    let tip = sum*(percentage/100);
    let total = sum+tip;

    console.log(`
    Sum: ${sum}
    Percentage: ${percentage}
    tip: ${tip.toFixed(2)}
    total: ${total.toFixed(2)}
    
    `);
};
tipCalculator(50,20);