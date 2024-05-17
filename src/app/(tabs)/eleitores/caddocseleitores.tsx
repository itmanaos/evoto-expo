import { Center, HStack, Heading, Icon, ScrollView, Stack, VStack } from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import ButtonForm from '@/components/NativeBaseForm/ButtonForm';
import InputForm from '@/components/NativeBaseForm/InputForm';
import { Tabs, router } from 'expo-router';
import { PressableProps } from 'react-native';

export default function Caddocseleitores() {
  function sendSubmit(data: PressableProps) {
    router.push('/eleitores/cadinfoeleitores');
  }
  return (
    <ScrollView>
      <VStack bgColor="gray.100" flex={1}>
        <Tabs.Screen
          options={{
            headerShown: true,
            title: 'Cadastro Eleitor',
          }}
        />

        <Center>
          <Heading my={2} fontSize={'lg'}>
            Documentos do Eleitor
          </Heading>
          <Stack space={2} w="100%" alignItems="center">
            <InputForm
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="folder-shared" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="CPF"
            />
            <InputForm
              InputLeftElement={
                <Icon as={<MaterialIcons name="note" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Titulo de Eleitor"
            />
            <InputForm
              InputLeftElement={
                <Icon as={<MaterialIcons name="note" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Sessão Eleitoral"
            />
            <InputForm
              InputLeftElement={
                <Icon as={<MaterialIcons name="note" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Zona"
            />
            <InputForm
              InputLeftElement={
                <Icon as={<MaterialIcons name="note" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Local de Votação"
            />
            <HStack space={3} justifyContent="center" w="4/5">
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
                title="Prosseguir"
                onPress={sendSubmit}
                w={{
                  base: '1/2',
                  md: '25%',
                }}
              />
            </HStack>
          </Stack>
        </Center>
      </VStack>
    </ScrollView>
  );
}
