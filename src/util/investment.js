// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInterestEarned = 0;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    totalInterestEarned += interestEarnedInYear;
    investmentValue += interestEarnedInYear + annualInvestment;

    const totalInterest = investmentValue - (annualInvestment * (i + 1)) - initialInvestment;
    const totalAmountInvested = investmentValue - totalInterest;

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      totalInterest: totalInterest,
      totalInvested: totalAmountInvested,
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});


// const totalInterest =
//   yearData.valueEndOfYear -
//   yearData.annualInvestment * yearData.year -
//   initialInvestment;

// const totalAmountInvested = yearData.valueEndOfYear - totalInterest;