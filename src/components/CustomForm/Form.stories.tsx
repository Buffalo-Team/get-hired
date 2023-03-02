import { Story } from '@ladle/react';
import { FormState, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import Component from '.';
import Button from '../Button';
import { ControlledTextInput, ControlledTextInputProps } from '../TextInput/TextInput.view';

type FormValues = {
  name: string;
  surname: string;
};

const CustomNameInput = ({
  control,
  error,
}: Pick<ControlledTextInputProps<FormValues>, 'control' | 'error'>) => {
  return (
    <ControlledTextInput<FormValues>
      label='Name'
      name='name'
      required
      control={control}
      error={error}
    />
  );
};

const CustomSurnameInput = ({
  control,
  error,
}: Pick<ControlledTextInputProps<FormValues>, 'control' | 'error'>) => {
  return (
    <ControlledTextInput<FormValues>
      label='Surname'
      name='surname'
      required
      control={control}
      error={error}
    />
  );
};

type SubmitButtonProps = {
  handleSubmit: UseFormHandleSubmit<FormValues>;
  formValues: FormState<FormValues>;
};

const SubmitButton = ({ handleSubmit }: SubmitButtonProps): JSX.Element => {
  const handleOnSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <Button fullWidth onClick={handleSubmit(handleOnSubmit)}>
      Submit
    </Button>
  );
};

type MyFormComponentProps = {
  children: (
    handleSubmit: UseFormHandleSubmit<FormValues>,
    formState: FormState<FormValues>,
  ) => JSX.Element;
};

const MyFormComponent = ({ children }: MyFormComponentProps): JSX.Element => {
  return (
    <Component<FormValues> defaultValues={{ name: '', surname: '' }}>
      {(formState, handleSubmit, control) => (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
            }}
          >
            <CustomNameInput control={control} error={formState.errors.name} />
            <CustomSurnameInput control={control} error={formState.errors.surname} />
            {children(handleSubmit, formState)}
          </div>
        </>
      )}
    </Component>
  );
};

export const Default: Story = () => {
  return (
    <MyFormComponent>
      {(handleSubmit, formValues) => (
        <SubmitButton handleSubmit={handleSubmit} formValues={formValues} />
      )}
    </MyFormComponent>
  );
};

Default.args = {};
