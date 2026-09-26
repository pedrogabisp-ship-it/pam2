import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './Estilo';

export default function App() {
  const [nome, setNome] = useState('');
  const [humor, setHumor] = useState('');
  const [mensagem, setMensagem] = useState('');

  function gerarMensagem() {
    if (nome === '' || humor === '') {
      setMensagem('Preencha seu nome e escolha seu humor.');
      return;
    }

    if (humor === 'feliz') {
      setMensagem(`${nome}, aproveite essa energia boa e faça seu dia render! 😄`);
    } else if (humor === 'cansado') {
      setMensagem(`${nome}, talvez seja uma boa hora para descansar um pouco. 😴`);
    } else if (humor === 'ansioso') {
      setMensagem(`${nome}, tente focar em uma coisa de cada vez. Vai dar certo. 🌿`);
    } else if (humor === 'animado') {
      setMensagem(`${nome}, use essa animação para começar algo novo! 🚀`);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Como você está hoje?</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.subtitulo}>Escolha seu humor:</Text>

      <View style={styles.opcoes}>

        <TouchableOpacity
          style={styles.botaoHumor}
          onPress={() => setHumor('feliz')}
        >
          <Text style={styles.textoBotao}>😄 Feliz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoHumor}
          onPress={() => setHumor('cansado')}
        >
          <Text style={styles.textoBotao}>😴 Cansado</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoHumor}
          onPress={() => setHumor('ansioso')}
        >
          <Text style={styles.textoBotao}>😬 Ansioso</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoHumor}
          onPress={() => setHumor('animado')}
        >
          <Text style={styles.textoBotao}>🚀 Animado</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.botaoPrincipal}
        onPress={gerarMensagem}
      >
        <Text style={styles.textoPrincipal}>Ver mensagem</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>{mensagem}</Text>

    </View>
  );
}