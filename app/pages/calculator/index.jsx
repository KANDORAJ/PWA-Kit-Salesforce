import React, { useState, useEffect } from 'react';
import { Box, Input, Select, Button  } from '@chakra-ui/react'

/**
 * Calculator component that performs basic arithmetic operations on two numbers.
*/

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(0);

  useEffect(() => {
    switch (operation) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
    }
  }, [num1, num2, operation]);

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setOperation('+');
    setResult(0);
  };

  return (
    <Box>
      <div>
        <label htmlFor="num1">Number 1:</label>
        <Input type="number" id="num1" value={num1} onChange={handleNum1Change} />
      </div>
      <div>
        <label htmlFor="num2">Number 2:</label>
        <Input type="number" id="num2" value={num2} onChange={handleNum2Change} />
      </div>
      <div>
        <label htmlFor="operation">Operation:</label>
        <Select  id="operation" value={operation} onChange={handleOperationChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </Select>
      </div>
      <div>Result: {result}</div>
      <Button onClick={handleClear}>Clear</Button>
    </Box>
  );
}

export default Calculator;