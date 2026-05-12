import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider as PaperProvider, Button, Surface } from 'react-native-paper';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [primeiroNumero, setPrimeiroNumero] = useState(null);
  const [operacao, setOperacao] = useState(null);
  const [aguardandoSegundoNumero, setAguardandoSegundoNumero] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  const digitarNumero = (num) => {
    if (finalizado) {
      setDisplay(num);
      setFinalizado(false);
    } else if (aguardandoSegundoNumero) {
      setDisplay(display + num);
      setAguardandoSegundoNumero(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const escolherOperacao = (op) => {
    if (operacao) return; // Evita colocar dois operadores

    setPrimeiroNumero(parseFloat(display));
    setOperacao(op);
    setDisplay(display + op);
    setAguardandoSegundoNumero(false); // Não limpa o display, apenas continua
    setFinalizado(false);
  };

  const calcular = () => {
    if (operacao === null || primeiroNumero === null) return;

    // Pega apenas a parte do segundo número da string do display
    const partes = display.split(operacao);
    const segundoNumero = parseFloat(partes[partes.length - 1]);
    
    if (isNaN(segundoNumero)) return;

    let resultado = 0;

    if (operacao === '+') {
      resultado = primeiroNumero + segundoNumero;
    } else if (operacao === '-') {
      resultado = primeiroNumero - segundoNumero;
    } else if (operacao === '*') {
      resultado = primeiroNumero * segundoNumero;
    } else if (operacao === '/') {
      resultado = primeiroNumero / segundoNumero;
    }

    setDisplay(resultado.toString());
    setPrimeiroNumero(null);
    setOperacao(null);
    setAguardandoSegundoNumero(false);
    setFinalizado(true);
  };

  const limpar = () => {
    setDisplay('0');
    setPrimeiroNumero(null);
    setOperacao(null);
    setAguardandoSegundoNumero(false);
    setFinalizado(false);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Surface style={styles.display}>
          <Text style={styles.displayText}>{display}</Text>
        </Surface>

        <View style={styles.linha}>
          <Button mode="contained" onPress={() => digitarNumero('7')} style={styles.botao}>7</Button>
          <Button mode="contained" onPress={() => digitarNumero('8')} style={styles.botao}>8</Button>
          <Button mode="contained" onPress={() => digitarNumero('9')} style={styles.botao}>9</Button>
          <Button mode="contained" onPress={() => escolherOperacao('/')} style={styles.botaoOperacao}>/</Button>
        </View>

        <View style={styles.linha}>
          <Button mode="contained" onPress={() => digitarNumero('4')} style={styles.botao}>4</Button>
          <Button mode="contained" onPress={() => digitarNumero('5')} style={styles.botao}>5</Button>
          <Button mode="contained" onPress={() => digitarNumero('6')} style={styles.botao}>6</Button>
          <Button mode="contained" onPress={() => escolherOperacao('*')} style={styles.botaoOperacao}>*</Button>
        </View>

        <View style={styles.linha}>
          <Button mode="contained" onPress={() => digitarNumero('1')} style={styles.botao}>1</Button>
          <Button mode="contained" onPress={() => digitarNumero('2')} style={styles.botao}>2</Button>
          <Button mode="contained" onPress={() => digitarNumero('3')} style={styles.botao}>3</Button>
          <Button mode="contained" onPress={() => escolherOperacao('-')} style={styles.botaoOperacao}>-</Button>
        </View>

        <View style={styles.linha}>
          <Button mode="contained" onPress={() => digitarNumero('0')} style={styles.botao}>0</Button>
          <Button mode="contained" onPress={limpar} style={styles.botaoLimpar}>C</Button>
          <Button mode="contained" onPress={calcular} style={styles.botaoIgual}>=</Button>
          <Button mode="contained" onPress={() => escolherOperacao('+')} style={styles.botaoOperacao}>+</Button>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  display: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 20,
    elevation: 4,
  },
  displayText: {
    fontSize: 40,
  },
  linha: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  botao: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
  },
  botaoOperacao: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ff9800',
  },
  botaoLimpar: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f44336',
  },
  botaoIgual: {
    flex: 1,
    margin: 5,
    backgroundColor: '#4caf50',
  },
});
