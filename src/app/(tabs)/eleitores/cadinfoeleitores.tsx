import { Center, HStack, Heading, Icon, ScrollView, Stack, VStack } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import ButtonForm from '@/components/NativeBaseForm/ButtonForm';
import InputForm from '@/components/NativeBaseForm/InputForm';
import { Tabs, router } from 'expo-router';
import { IEleitoresInfoForm, formInfoSchema } from '@/database/interfaces/IEleitoresForm';

export default function Cadinfoeleitores() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IEleitoresInfoForm>({
    resolver: yupResolver(formInfoSchema),
  });

  function handleSubmitForm(data: IEleitoresInfoForm) {
    console.log(data);
    const json_data = JSON.stringify(data);
    AsyncStorage.setItem('@EleitoresInfo', json_data);
    console.log('ctx.cadinfoeleitores.27 ' + json_data);
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
            <Controller
              control={control}
              name="genero"
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="transgender" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Genero"
                  errorMessage={errors.genero?.message}
                  onChangeText={onChange}
                  returnKeyType="next"
                />
              )}
            />
            <Controller
              control={control}
              name="estcivil"
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="diversity-3" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Estado Civil"
                  errorMessage={errors.estcivil?.message}
                  onChangeText={onChange}
                  returnKeyType="next"
                />
              )}
            />
            <Controller
              control={control}
              name="nacionalidade"
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="location-city" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Pais de Nascimento"
                  errorMessage={errors.nacionalidade?.message}
                  onChangeText={onChange}
                  returnKeyType="next"
                />
              )}
            />
            <Controller
              control={control}
              name="naturalidade"
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="location-city" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Cidade/UF de Nascimento"
                  errorMessage={errors.naturalidade?.message}
                  onChangeText={onChange}
                  returnKeyType="next"
                />
              )}
            />
            <Controller
              control={control}
              name="ocupacao"
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="work" />} size={5} ml="2" color="muted.400" />
                  }
                  placeholder="Ocupação"
                  errorMessage={errors.ocupacao?.message}
                  onChangeText={onChange}
                  returnKeyType="next"
                />
              )}
            />
            <Controller
              control={control}
              name="grupofamiliar"
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="family-restroom" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Tamanho do Grupo Familiar"
                  errorMessage={errors.grupofamiliar?.message}
                  onChangeText={onChange}
                  returnKeyType="next"
                />
              )}
            />
            <Controller
              control={control}
              name="definiencia"
              render={({ field: { onChange } }) => (
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
                  errorMessage={errors.definiencia?.message}
                  onChangeText={onChange}
                  returnKeyType="next"
                />
              )}
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
                onPress={handleSubmit(handleSubmitForm)}
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
