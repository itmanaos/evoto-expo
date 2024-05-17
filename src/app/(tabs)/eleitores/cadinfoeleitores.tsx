import { Center, HStack, Heading, Icon, ScrollView, Stack, VStack } from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import ButtonForm from '@/components/NativeBaseForm/ButtonForm';
import InputForm from '@/components/NativeBaseForm/InputForm';
import { Tabs, router } from 'expo-router';
import { PressableProps } from 'react-native';

export default function Cadinfoeleitores() {
  function sendSubmit(data: PressableProps) {
    router.push('/eleitores/cadfichaeleitor');
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
            Outras Informações
          </Heading>
          <Stack space={2} w="100%" alignItems="center">
            <InputForm
              InputLeftElement={
                <Icon as={<MaterialIcons name="transgender" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Genero"
            />
            <InputForm
              InputLeftElement={
                <Icon as={<MaterialIcons name="diversity-3" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Estado Civil"
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
              placeholder="Cidade de Nascimento"
            />
            <InputForm
              InputLeftElement={
                <Icon as={<MaterialIcons name="work" />} size={5} ml="2" color="muted.400" />
              }
              placeholder="Ocupação"
            />
            <InputForm
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="family-restroom" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Quantidade de Pessoas em Grupo Familiar"
            />
            <InputForm
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="accessibility" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Possui Alguma Deficiência?"
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
