import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  useFormContext,
} from "react-hook-form";

type Tprops = {
  textArea?: boolean;
  type?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  labelStyle?: string;
  wrapperStyle?: string;
  required?: string;
  id: string;
  pattern?: {} | any;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};

const FormInput = ({
  type,
  label,
  placeholder,
  className,
  labelStyle,
  required,
  pattern,
  id,
  textArea,
  wrapperStyle,
}: Tprops) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() as any;

  return (
    <div className={`${wrapperStyle}`}>
      <label className={`${labelStyle} mb-2`} htmlFor={id}>
        {label}
      </label>
      {textArea ? (
        <textarea
          placeholder={placeholder}
          className={`${className} ${
            errors?.[id] && "border-red-600 outline-none"
          }`}
          {...register(id, {
            required: required ? required : false,
            pattern: pattern ? pattern : {},
          })}
        />
      ) : (
        <input
          type={type ? type : "text"}
          placeholder={placeholder}
          className={`${className} ${
            errors?.[id] && "border-red-600 outline-none"
          }`}
          {...register(id, {
            required: required ? required : false,
            pattern: pattern ? pattern : {},
          })}
        />
      )}

      {errors?.[id] && (
        <span className="text-red-600 text-[12px] mt-1">{`${errors?.[id]?.message}`}</span>
      )}
    </div>
  );
};

export default FormInput;
