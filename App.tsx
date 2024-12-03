import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import CalculatorButton from './src/components/CalculatorButton';
import Display from './src/components/Display';
import {evaluate} from 'mathjs'; // Import mathjs library
import styled from 'styled-components/native'; // Import styled-components

const App = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonPress = (label: string) => {
    if (label === '=') {
      try {
        // Safely evaluate the expression using mathjs
        const calculatedResult = evaluate(input);
        setResult(calculatedResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (label === 'C') {
      // Clear the input and result
      setInput('');
      setResult('');
    } else {
      // Append the button label to the input
      setInput(input + label);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
  ];

  return (
    <Container>
      <Display input={input} result={result} />
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        {buttons.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map(label => (
              <CalculatorButton
                key={label}
                label={label}
                onPress={() => handleButtonPress(label)}
              />
            ))}
          </Row>
        ))}
        <Row>
          <CalculatorButton label="C" onPress={() => handleButtonPress('C')} />
        </Row>
      </ScrollView>
    </Container>
  );
};

// Styled components
const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

const Row = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;

export default App;
