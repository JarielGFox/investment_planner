import { calculateInvestmentResults, formatter } from "../../util/investment";

const TableContent = ({ inputValue }) => {
  const investmentResults = calculateInvestmentResults(inputValue);

  return (
    <>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((data, index) => (
          <tr key={index}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(data.totalInterest)}</td>
            <td>{formatter.format(data.totalInvested)}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableContent;
