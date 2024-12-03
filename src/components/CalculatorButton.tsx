import React from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native'; // Import styled-components

interface Props {
  label: string;
  onPress: () => void;
}

const CalculatorButton: React.FC<Props> = ({label, onPress}) => {
  return (
    <ButtonContainer>
      <StyledButton mode="contained" onPress={onPress}>
        {label}
      </StyledButton>
    </ButtonContainer>
  );
};

// Styled components
const ButtonContainer = styled.View`
  margin: 5px;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

export default CalculatorButton;
