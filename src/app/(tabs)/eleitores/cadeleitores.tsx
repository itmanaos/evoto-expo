import { Button, SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { IEleitoresForm } from '@/database/interfaces/IEleitoresForm';
import { Input } from '@/components/Input';

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

export default function Cadeleitores() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IEleitoresForm>({});

  function sendSubmit(data: IEleitoresForm) {
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.headerContainer}>
      <Tabs.Screen
        options={{
          headerShown: true,
          title: 'Novo Eleitor',
        }}
      />
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          nome="firstName"
        />
        {errors.nome && <Text>This is required.</Text>}

        <Button title="Submit" onPress={handleSubmit(sendSubmit)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: 50,
  },
});
