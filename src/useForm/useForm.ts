// useFormLogic.ts
import { useForm, SubmitHandler, UseFormReturn } from "react-hook-form";

export interface InputProps {
  startTime: string;
  endTime: string;
  comment: string;
  internalFocus?: string;
  externalFocus?: string;
  externalClient?: string;
  breakType?: string;
  leaveReason?: string;
  leaveToggle?: boolean;
}

export function getUseForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  }: UseFormReturn<InputProps> = useForm<InputProps>();

  const onSubmit: SubmitHandler<InputProps> = (data) => {
    console.log("Form data:", data);
  };

  return {
    register,
    handleSubmit,
    setValue,
    errors,
    onSubmit,
  };
}
