import React, { useRef } from 'react';
import { Tabs, router } from 'expo-router';
import { Button, Center, Heading, Icon, ScrollView, Stack, VStack } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInputMask } from 'react-native-masked-text';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';
import { PressableProps } from 'react-native';
import ButtonForm from '@/components/NativeBaseForm/ButtonForm';
import InputForm from '@/components/NativeBaseForm/InputForm';
import { IEleitoresPessoaisForm, formDadosSchema } from '@/database/interfaces/IEleitoresForm';

export default function Cadeleitores() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IEleitoresPessoaisForm>({
    resolver: yupResolver(formDadosSchema),
  });

  function handleCEP(data: PressableProps) {
    console.log(data);
  }

  function handleSubmitForm(data: IEleitoresPessoaisForm) {
    console.log(data);

    const json_data = JSON.stringify(data);
    AsyncStorage.setItem('@EleitoresDados', json_data);
    console.log('ctx.cadeleitores.33 ' + json_data);

    router.push('/eleitores/caddocseleitores');
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
            <Controller
              name="nome"
              control={control}
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
                  }
                  errorMessage={errors.nome?.message}
                  onChangeText={onChange}
                  placeholder="Nome do Eleitor"
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />
                  }
                  errorMessage={errors.email?.message}
                  onChangeText={onChange}
                  placeholder="Email do Eleitor"
                />
              )}
            />

            <Controller
              name="telefone"
              control={control}
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field: { value, onChange } }) => (
                <TextInputMask
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                  }}
                  value={value}
                  onChangeText={onChange}
                  customTextInput={InputForm}
                  customTextInputProps={{
                    errorMessage: errors.telefone?.message,
                    InputLeftElement: (
                      <Icon
                        as={<MaterialIcons name="phone-android" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    ),
                  }}
                  placeholder="Telefone de Contato"
                />
              )}
            />

            <Controller
              name="datanasc"
              control={control}
              render={({ field: { value, onChange } }) => (
                <TextInputMask
                  type={'datetime'}
                  options={{
                    format: 'DD/MM/YYYY',
                  }}
                  value={value}
                  onChangeText={onChange}
                  customTextInput={InputForm}
                  customTextInputProps={{
                    InputLeftElement: (
                      <Icon
                        as={<MaterialIcons name="calendar-month" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    ),
                  }}
                  placeholder="Data de Nascimento"
                />
              )}
            />

            <Controller
              name="cep"
              control={control}
              render={({ field: { value, onChange } }) => (
                <TextInputMask
                  type={'zip-code'}
                  value={value}
                  keyboardType="number-pad"
                  onChangeText={onChange}
                  customTextInput={InputForm}
                  customTextInputProps={{
                    InputLeftElement: (
                      <Icon
                        as={<MaterialIcons name="maps-home-work" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    ),
                    errorMessage: errors.cep?.message,
                    w: '100%',
                    py: '0',
                    InputRightElement: <Button onPress={handleCEP}>Buscar CEP</Button>,
                  }}
                  placeholder="Digite o CEP"
                />
              )}
            />

            <Controller
              name="logradouro"
              control={control}
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="person-pin-circle" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  errorMessage={errors.logradouro?.message}
                  onChangeText={onChange}
                  placeholder="Logradouro"
                />
              )}
            />
            <Controller
              name="numero"
              control={control}
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="numbers" />} size={5} ml="2" color="muted.400" />
                  }
                  errorMessage={errors.numero?.message}
                  onChangeText={onChange}
                  placeholder="Número da Residência"
                />
              )}
            />
            <Controller
              name="complemento"
              control={control}
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
                  errorMessage={errors.complemento?.message}
                  onChangeText={onChange}
                  placeholder="Complemento"
                />
              )}
            />
            <Controller
              name="bairro"
              control={control}
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
                  errorMessage={errors.bairro?.message}
                  onChangeText={onChange}
                  placeholder="Bairro"
                />
              )}
            />
            <Controller
              name="cidade"
              control={control}
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
                  errorMessage={errors.cidade?.message}
                  onChangeText={onChange}
                  placeholder="Cidade"
                />
              )}
            />
            <Controller
              name="estado"
              control={control}
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
                  errorMessage={errors.estado?.message}
                  onChangeText={onChange}
                  placeholder="Estado"
                />
              )}
            />

            <ButtonForm title="Prosseguir" onPress={handleSubmit(handleSubmitForm)} />
          </Stack>
        </Center>
      </VStack>
    </ScrollView>
  );
}
