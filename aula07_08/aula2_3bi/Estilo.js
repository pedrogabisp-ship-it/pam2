import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#f4f4f4',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  subtitulo: {
    fontSize: 18,
    marginBottom: 10,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },

  opcoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  botaoHumor: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },

  textoBotao: {
    fontSize: 16,
  },

  botaoPrincipal: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },

  textoPrincipal: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  resultado: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 25,
    lineHeight: 26,
  },

});