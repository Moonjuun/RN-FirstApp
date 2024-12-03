import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {
  input: string;
  result: string;
}

const Display: React.FC<Props> = ({input, result}) => {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.inputText}>{input}</Text>
      {result ? <Text style={styles.resultText}>= {result}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  displayContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  inputText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 24,
    color: 'gray',
  },
});

export default Display;
