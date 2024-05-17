import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
};

export default function InputForm({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl
      isInvalid={invalid}
      w={{
        base: '90%',
        md: '25%',
      }}
    >
      <NativeBaseInput
        isInvalid={invalid}
        fontSize={'md'}
        _invalid={{
          borderColor: 'red.500',
          borderWidth: 1,
        }}
        _focus={{
          borderColor: 'green.300',
          bg: 'green.50',
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
