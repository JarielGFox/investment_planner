import { useState } from "react";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import Table from "./components/Table/Table";
import TableContent from "./components/Table/TableContent";
function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  //funzione che gestisce l'input, destrutturo i valori dell'oggetto e li aggiorno nello state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: +value,
    });
  };

  return (
    <>
      <Header />
      <InputForm inputValue={inputValue} handleChange={handleChange} />
      <Table duration={inputValue.duration}>
        <TableContent inputValue={inputValue} />
      </Table>
    </>
  );
}

export default App;
