import {
  Control,
  DeepPartial,
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  useForm,
} from 'react-hook-form';

export type CustomFormProps<FORM_VALUES extends FieldValues> = {
  defaultValues: DeepPartial<FORM_VALUES>;
  children: (
    formState: FormState<FORM_VALUES>,
    handleSubmit: UseFormHandleSubmit<FORM_VALUES>,
    control: Control<FORM_VALUES>,
  ) => JSX.Element[] | JSX.Element;
};

const CustomForm = <FORM_VALUES extends FieldValues>({
  defaultValues,
  children,
}: CustomFormProps<FORM_VALUES>): JSX.Element => {
  const methods = useForm<FORM_VALUES>({ defaultValues });
  const { handleSubmit, formState, control } = methods;

  return <form>{children(formState, handleSubmit, control)}</form>;
};

export default CustomForm;
