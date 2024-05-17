import { Center, Heading, Text, ScrollView, Stack, VStack, HStack } from 'native-base';

import React from 'react';
import ButtonForm from '@/components/NativeBaseForm/ButtonForm';
import { Tabs, router } from 'expo-router';
import { PressableProps } from 'react-native';

export default function Cadfichaeleitor() {
  function sendSubmit(data: PressableProps) {
    console.log(data);
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
            <Text bold>Nome: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Email: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Telefone: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Data de Nascimento: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>CEP: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Logradouro: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Número: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Complemento: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Bairro: </Text> is in Agra.
          </Text>

          <Text bold borderBottomWidth={1} w={'full'}>
            Documentos
          </Text>
          <Text italic>
            <Text bold>CPF: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Titulo de Eleitor: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Sessão: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Zona: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Local de Votação: </Text> is in Agra.
          </Text>
          <Text bold borderBottomWidth={1} w={'full'}>
            Outras Informações
          </Text>
          <Text italic>
            <Text bold>Genero: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Estado Civil: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Natutal de: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Ocupação: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Qtde Grupo Familiar: </Text> is in Agra.
          </Text>
          <Text italic>
            <Text bold>Deficiência: </Text> is in Agra.
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
