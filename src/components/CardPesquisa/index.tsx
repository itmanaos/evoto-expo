import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { IPesquisas } from '@/database/interfaces/IPesquisas';

type Props = TouchableOpacityProps & {
  pesq: IPesquisas;
  onPress: () => void;
};

export default function index({ pesq, onPress, ...rest }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} key={pesq.key}>
      <View style={styles.container}>
        <Text style={styles.header}>CODIGO: {pesq.key}</Text>
        <Text style={styles.textContent}>REGISTRO: {pesq.reg}</Text>
        <Text style={styles.textTitulo}>NOME: {pesq.nome}</Text>
        <Text style={styles.textContent}>Descrição: {pesq.descricao}</Text>

        <View style={styles.qtdeline}>
          <Text style={styles.textContent}>Tipo: {pesq.tipo}</Text>
          <Text style={styles.textContent}>STATUS: {pesq.situacao}</Text>
        </View>

        <View>
          <Text style={styles.textSubtitulo}>PERIODO DA PESQUISA</Text>
        </View>

        <View style={styles.qtdeline}>
          <Text style={styles.textContent}>DT INICIO: {pesq.datainicio}</Text>
          <Text style={styles.textContent}>DT LIMITE: {pesq.datafim}</Text>
        </View>

        <Text style={styles.textSubtitulo}>AMOSTRA DE PÚBLICO</Text>

        <View style={styles.qtdeline}>
          <Text style={styles.textContent}>QTDE MIN: {pesq.qtdeminima}</Text>
          <Text style={styles.textContent}>QTDE MAX: {pesq.qtdemaxima}</Text>
          <Text style={styles.textContent}>QTDE ATUAL: {pesq.qtdeatual}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
