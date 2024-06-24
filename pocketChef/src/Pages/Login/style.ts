import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#70B9BE'
  },
  animatedContainer: {
    alignItems: 'center',
    width: '100%',
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,  // Espaçamento abaixo da logo
    paddingTop: 60,   // Espaçamento acima da logo
  },
  logo: {
    width: 150, // Ajuste o tamanho conforme necessário
    height: 150, // Ajuste o tamanho conforme necessário
    resizeMode: 'contain',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,  // Espaçamento abaixo do título
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  email: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    width: 370,
    height: 55,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 20,
  },
  senha: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    width: 370,
    height: 55,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 20,
  },
  voltarIcon: {
    color: '#ffffff',
    marginTop: 55,
    marginRight: 330,
  },
});
