import {
  Select as SelectNativeBase,
  ISelectProps,
  FormControl,
  WarningOutlineIcon,
  CheckIcon,
} from 'native-base';

type Props = ISelectProps & {
  errorMessage?: string | null;
};

export default function SelectForm({ errorMessage = null, ...rest }: Props) {
  const invalid = !!errorMessage;
  return (
    <FormControl
      w={{
        base: '90%',
        md: '25%',
      }}
      isRequired
      isInvalid={invalid}
    >
      <FormControl.Label>Choose service</FormControl.Label>
      <SelectNativeBase
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size={5} />,
        }}
        mt="1"
        {...rest}
      >
        <SelectNativeBase.Item label="UX Research" value="ux" />
        <SelectNativeBase.Item label="Web Development" value="web" />
        <SelectNativeBase.Item label="Cross Platform Development" value="cross" />
        <SelectNativeBase.Item label="UI Designing" value="ui" />
        <SelectNativeBase.Item label="Backend Development" value="backend" />
      </SelectNativeBase>
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
