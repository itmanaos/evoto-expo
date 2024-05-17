import React, { useState } from 'react';
import { Tabs, router } from 'expo-router';
import { Button, Center, Heading, Icon, ScrollView, Stack, VStack } from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';
import { PressableProps } from 'react-native';
import ButtonForm from '@/components/NativeBaseForm/ButtonForm';
import InputForm from '@/components/NativeBaseForm/InputForm';

export default function Cadeleitores() {
  const [show, setShow] = useState(false);
  function sendSubmit(data: PressableProps) {
    router.push('/eleitores/caddocseleitores');
  }
  function handleCEP(data: PressableProps) {
    console.log(data);
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
            Dados Pessoais
          </Heading>
          <Stack space={2} w="100%" alignItems="center">
            <InputForm
              InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Nome do Eleitor"
            />
            <InputForm
              InputLeftElement={
                <Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Email do Eleitor"
            />
            <InputForm
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="phone-android" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Telefone de Contato"
            />
            <InputForm
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="calendar-month" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Data de Nascimento"
            />
            <InputForm
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="maps-home-work" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              type={'text'}
              w="100%"
              py="0"
              InputRightElement={<Button onPress={() => setShow(!show)}>Buscar CEP</Button>}
              placeholder="CEP"
            />
            <InputForm
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person-pin-circle" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Logradouro"
            />
            <InputForm
              InputLeftElement={
                <Icon as={<MaterialIcons name="numbers" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Número da Residência"
            />
            <InputForm
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="location-city" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Complemento"
            />
            <InputForm
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="location-city" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Bairro"
            />
            <ButtonForm title="Prosseguir" onPress={sendSubmit} />
          </Stack>
        </Center>
      </VStack>
    </ScrollView>
  );
}
