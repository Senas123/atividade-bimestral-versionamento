import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Brincando com Flexbox</Text>
      <Text style={styles.subtitle}>Como os blocos estão organizados?</Text>

      {/* O container abaixo é o nosso "playground" do Flexbox */}
      <View style={styles.flexPlayground}>
       
        {/* --- INÍCIO DA IMPLEMENTAÇÃO DO FLEXBOX (Estrutura) --- */}
        {/* Atualmente, eles estão empilhados como uma torre. */}
        <View style={[styles.box, { backgroundColor: '#ef4444' }]}>
          <Text style={styles.num}>1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#22c55e' }]}>
          <Text style={styles.num}>2</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#3b82f6' }]}>
          <Text style={styles.num}>3</Text>
        </View>
        {/* --- FIM DA IMPLEMENTAÇÃO --- */}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#60a5fa'
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 20,
  },
 
  flexPlayground: {
    flex: 1,
    backgroundColor: '#1e293b',
    // Adicionamos as 3 propriedades principais do Flexbox:
    flexDirection: 'row',          // Muda a direção para linha (horizontal)
    justifyContent: 'space-evenly', // Distribui o espaço vazio IGUALMENTE entre os itens no eixo principal
    alignItems: 'center',          // Centraliza os quadrados no eixo secundário (vertical)
  },

  box: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // DICA: Removemos a margin: 10 anterior porque o justifyContent: 'space-evenly'
    // já faz o trabalho de desgrudar os blocos de forma inteligente!
  },
  num: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold'
  }
});