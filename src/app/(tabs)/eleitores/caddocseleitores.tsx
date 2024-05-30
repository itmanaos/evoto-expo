import { Center, HStack, Heading, Icon, ScrollView, Stack, VStack } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInputMask } from 'react-native-masked-text';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';
import React, { useRef } from 'react';
import ButtonForm from '@/components/NativeBaseForm/ButtonForm';
import InputForm from '@/components/NativeBaseForm/InputForm';
import { Tabs, router } from 'expo-router';
import { IEleitoresDocsForm, formDocsSchema } from '@/database/interfaces/IEleitoresForm';

export default function Caddocseleitores() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IEleitoresDocsForm>({
    resolver: yupResolver(formDocsSchema),
  });

  const cpfRef = useRef(null);

  function handleSubmitForm(data: IEleitoresDocsForm) {
    console.log(data);
    const json_data = JSON.stringify(data);
    AsyncStorage.setItem('@EleitoresDocs', json_data);
    console.log('ctx.caddocseleitores.27 ' + json_data);
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
            <Controller
              name="cpf"
              control={control}
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({ field: { value, onChange } }) => (
                <TextInputMask
                  type={'cpf'}
                  value={value}
                  onChangeText={onChange}
                  customTextInput={InputForm}
                  customTextInputProps={{
                    errorMessage: errors.cpf?.message,
                    InputLeftElement: (
                      <Icon
                        as={<MaterialIcons name="folder-shared" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    ),
                  }}
                  ref={cpfRef}
                  placeholder="CPF"
                />
              )}
            />

            <Controller
              name="nrotitulo"
              control={control}
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="note" />} size={5} ml="2" color="muted.400" />
                  }
                  placeholder="Titulo de Eleitor"
                  type="text"
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              name="secao"
              control={control}
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="note" />} size={5} ml="2" color="muted.400" />
                  }
                  placeholder="Sessão Eleitoral"
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              name="zona"
              control={control}
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="note" />} size={5} ml="2" color="muted.400" />
                  }
                  placeholder="Zona"
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              name="local"
              control={control}
              render={({ field: { onChange } }) => (
                <InputForm
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="note" />} size={5} ml="2" color="muted.400" />
                  }
                  placeholder="Local de Votação"
                  onChangeText={onChange}
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
