import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { IPesquisas } from '@/database/interfaces/IPesquisas';
import { pesqStatusColor, pesqStatusDesc } from '@/database/modals/pesquisas';
import { Ionicons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  pesq: IPesquisas;
  onPress: () => void;
};

export default function index({ pesq, onPress, ...rest }: Props) {
  const situacao = pesqStatusDesc[pesq.situacao];
  const cor = pesqStatusColor[pesq.situacao];
  return (
    <TouchableOpacity onPress={onPress} key={pesq.key}>
      <View style={styles.container}>
        <View style={styles.inlineContent}>
          <Text style={styles.keyBedge}> {pesq.key}</Text>
          <Text style={[styles.statusBedge, { backgroundColor: cor }]}>{situacao}</Text>
        </View>
        <Text style={styles.tituloText}>{pesq.nome}</Text>
        <View style={styles.inlineContent}>
          <Text style={styles.contentText}>Reg. nº: {pesq.reg}</Text>
          <Text style={styles.contentText}>Dt. Reg. {pesq.datareg}</Text>
          <Text style={styles.contentText}>Tipo: {pesq.tipo}</Text>
        </View>
        <View style={styles.inlineContent}>
          <View style={styles.periodoContent}>
            <Text style={styles.subtituloText}>PERIODO DA PESQUISA</Text>
            <View style={styles.inlineContent}>
              <View>
                <Text style={styles.contentText}>DT INICIO</Text>
                <Text style={styles.contentText}>{pesq.datainicio}</Text>
              </View>
              <View>
                <Text style={styles.contentText}>DT LIMITE</Text>
                <Text style={styles.contentText}>D{pesq.datafim}</Text>
              </View>
            </View>
          </View>
          <View style={styles.amostraContent}>
            <Text style={styles.subtituloText}>AMOSTRA</Text>

            <View style={styles.inlineContent}>
              <View>
                <Text style={styles.contentText}>MIN</Text>
                <Text style={styles.contentText}>{pesq.qtdeminima}</Text>
              </View>
              <View>
                <Text style={styles.contentText}>MAX</Text>
                <Text style={styles.contentText}>{pesq.qtdemaxima}</Text>
              </View>
              <View>
                <Text style={styles.contentText}>ATUAL</Text>
                <Text style={styles.contentText}>{pesq.qtdeatual}</Text>
              </View>
              {pesq.situacao === 1 ? (
                <View style={styles.iconContainer}>
                  <Ionicons name="add-circle" size={52} color="green" />
                </View>
              ) : null}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
