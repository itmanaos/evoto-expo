import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title?: string;
};

export default function ButtonForm({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w={{
        base: '80%',
        md: '25%',
      }}
      h={12}
      rounded={10}
      bg={'#2FDBBC'}
      _pressed={{
        bgColor: 'green.700',
      }}
      {...rest}
    >
      <Text color={'white'} fontSize={'lg'}>
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
