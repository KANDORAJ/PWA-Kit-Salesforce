import React, { useState, useEffect } from 'react';
import { Box, Input, Select, Button  } from '@chakra-ui/react'

/**
 * Calculator component that performs basic arithmetic operations on two numbers.
*/

function Calculator() {
  // Define states
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(0);

  // Calculate result
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

  // Handle changes in Number 1
  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  // Handle changes in Number 2
  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  // Handle changes in Operation
  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  // Clear all values
  const handleClear = () => {
    setNum1("");
    setNum2("");
    setOperation('+');
    setResult(0);
  };

  return (
    <Box p={4} maxW="sm" borderWidth="1px" borderRadius="md" mx="auto">
      <div>
        <label htmlFor="num1">Number 1:</label>
        <Input size="sm" type="number" id="num1" value={num1} onChange={handleNum1Change} />
      </div>
      <div>
        <label htmlFor="num2">Number 2:</label>
        <Input size="sm" type="number" id="num2" value={num2} onChange={handleNum2Change} />
      </div>
      <div>
        <label htmlFor="operation">Operation:</label>
        <Select size="sm" id="operation" value={operation} onChange={handleOperationChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </Select>
      </div>
      <div>Result: {result}</div>
      <Button mt={4} colorScheme="teal" onClick={handleClear}>Clear</Button>
    </Box>
  );
}

export default Calculator;
