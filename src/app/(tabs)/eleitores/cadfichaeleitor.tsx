import { Heading, Text, ScrollView, Stack, VStack, HStack } from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useEffect, useState } from 'react';
import ButtonForm from '@/components/NativeBaseForm/ButtonForm';
import { Tabs, router } from 'expo-router';
import { PressableProps } from 'react-native';
import {
  IEleitoresDocsForm,
  IEleitoresForm,
  IEleitoresInfoForm,
  IEleitoresPessoaisForm,
} from '@/database/interfaces/IEleitoresForm';

export default function Cadfichaeleitor() {
  const [eleitorData, setEleitorData] = useState<IEleitoresForm | null>(null);
  const [eleitorPessoaisData, setEleitorPessoaisData] = useState<IEleitoresPessoaisForm | null>(
    null
  );
  const [eleitorDocsData, setEleitorDocsData] = useState<IEleitoresDocsForm | null>(null);
  const [eleitorInfoData, setEleitorInfoData] = useState<IEleitoresInfoForm | null>(null);

  useEffect(() => {
    initilize();
  }, []);

  const initilize = async () => {
    try {
      const eleitorDataStorage = await AsyncStorage.getItem('@EleitoresDados');
      const eleitorDocsStorage = await AsyncStorage.getItem('@EleitoresDocs');
      const eleitorInfoStorage = await AsyncStorage.getItem('@EleitoresInfo');

      setEleitorPessoaisData(eleitorDataStorage != null ? JSON.parse(eleitorDataStorage) : null);
      setEleitorDocsData(eleitorDocsStorage != null ? JSON.parse(eleitorDocsStorage) : null);
      setEleitorInfoData(eleitorInfoStorage != null ? JSON.parse(eleitorInfoStorage) : null);
    } catch (error: any) {
      setEleitorData(null);
      setEleitorPessoaisData(null);
      setEleitorDocsData(null);
      setEleitorInfoData(null);
    }
  };

  function sendSubmit(data: PressableProps) {
    router.push('/eleitores/');
  }
  return (
    <ScrollView>
      <VStack bgColor="gray.100" alignItems="center">
        <Tabs.Screen
          options={{
            headerShown: true,
            title: 'Cadastro Eleitor',
          }}
        />

        <Heading my={2} fontSize={'lg'}>
          Confirmação Cadastro Eleitor
        </Heading>
        <Stack space={2} alignItems="baseline" w="4/5">
          <Text bold borderBottomWidth={1} w={'full'}>
            Dados Pessoais
          </Text>
          <Text italic>
            <Text bold>Nome: </Text> {eleitorPessoaisData?.nome}.
          </Text>
          <Text italic>
            <Text bold>Email: </Text> {eleitorPessoaisData?.email}.
          </Text>
          <Text italic>
            <Text bold>Telefone: </Text> {eleitorPessoaisData?.telefone}.
          </Text>
          <Text italic>
            <Text bold>Data de Nascimento: </Text> {eleitorPessoaisData?.datanasc}.
          </Text>
          <Text italic>
            <Text bold>CEP: </Text> {eleitorPessoaisData?.cep}.
          </Text>
          <Text italic>
            <Text bold>Logradouro: </Text> {eleitorPessoaisData?.logradouro}.
          </Text>
          <Text italic>
            <Text bold>Número: </Text> {eleitorPessoaisData?.numero}.
          </Text>
          <Text italic>
            <Text bold>Complemento: </Text> {eleitorPessoaisData?.complemento}.
          </Text>
          <Text italic>
            <Text bold>Bairro: </Text> {eleitorPessoaisData?.bairro}.
          </Text>

          <Text bold borderBottomWidth={1} w={'full'}>
            Documentos
          </Text>
          <Text italic>
            <Text bold>CPF: </Text> {eleitorDocsData?.cpf}.
          </Text>
          <Text italic>
            <Text bold>Titulo de Eleitor: </Text> {eleitorDocsData?.nrotitulo}.
          </Text>
          <Text italic>
            <Text bold>Sessão: </Text> {eleitorDocsData?.secao}.
          </Text>
          <Text italic>
            <Text bold>Zona: </Text> {eleitorDocsData?.zona}.
          </Text>
          <Text italic>
            <Text bold>Local de Votação: </Text> {eleitorDocsData?.local}.
          </Text>
          <Text bold borderBottomWidth={1} w={'full'}>
            Outras Informações
          </Text>
          <Text italic>
            <Text bold>Genero: </Text> {eleitorInfoData?.genero}.
          </Text>
          <Text italic>
            <Text bold>Estado Civil: </Text> {eleitorInfoData?.estcivil}.
          </Text>
          <Text italic>
            <Text bold>Natutal de: </Text> {eleitorInfoData?.naturalidade}.
          </Text>
          <Text italic>
            <Text bold>Nacionalidade: </Text> {eleitorInfoData?.nacionalidade}.
          </Text>
          <Text italic>
            <Text bold>Ocupação: </Text> {eleitorInfoData?.ocupacao}.
          </Text>
          <Text italic>
            <Text bold>Qtde Grupo Familiar: </Text> {eleitorInfoData?.grupofamiliar}.
          </Text>
          <Text italic>
            <Text bold>Deficiência: </Text> {eleitorInfoData?.definiencia}.
          </Text>
          <HStack space={3} justifyContent="center">
            <ButtonForm
              title="Voltar"
              onPress={() => {
                router.back();
              }}
              w={{
                base: '1/2',
                md: '25%',
              }}
              bg={'red.400'}
            />
            <ButtonForm
              title="Confirmar"
              onPress={sendSubmit}
              w={{
                base: '1/2',
                md: '25%',
              }}
            />
          </HStack>
        </Stack>
      </VStack>
    </ScrollView>
  );
}
