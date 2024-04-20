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
    <TouchableOpacity onPress={onPress} key={pesq.key}>
      <View style={styles.container}>
        <Text style={styles.status}> {pesq.situacao ? <Text>data</Text> : null}</Text>
        <View style={styles.inlineContent}>
          <Text style={styles.headerText}> {pesq.key}</Text>
          <Text style={styles.headerText}>Reg. nº: {pesq.reg}</Text>
        </View>

        <Text style={styles.textTitulo}>{pesq.nome}</Text>
        <Text style={styles.textContent}>{pesq.descricao}</Text>

        <View style={styles.qtdeline}>
          <Text style={styles.textContent}>Tipo: {pesq.tipo}</Text>
        </View>

        <View>
          <Text style={styles.textSubtitulo}>PERIODO DA PESQUISA</Text>
        </View>

        <View style={styles.inlineContent}>
          <View>
            <Text>DT INICIO</Text>
            <Text style={styles.textContent}>{pesq.datainicio}</Text>
          </View>
          <View>
            <Text>DT LIMITE</Text>
            <Text style={styles.textContent}>D{pesq.datafim}</Text>
          </View>
        </View>

        <Text style={styles.textSubtitulo}>AMOSTRA DE PÚBLICO</Text>

        <View style={styles.inlineContent}>
          <View>
            <Text>QTDE MIN</Text>
            <Text style={styles.textContent}>{pesq.qtdeminima}</Text>
          </View>
          <View>
            <Text>QTDE MAX</Text>
            <Text style={styles.textContent}>{pesq.qtdemaxima}</Text>
          </View>
          <View>
            <Text>QTDE ATUAL</Text>
            <Text style={styles.textContent}>{pesq.qtdeatual}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
