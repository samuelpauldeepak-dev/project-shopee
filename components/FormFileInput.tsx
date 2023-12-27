import {
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
  useFormContext,
} from "react-hook-form";
import Image from "next/image";
import { useState } from "react";
type Tprops = {
  label?: string;
  placeholder?: string;
  className?: string;
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

const FormFileInput = ({
  label,
  placeholder,
  className,
  wrapperStyle,
  required,
  id,
}: Tprops) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext() as any;
  const [imagePreview, setImagePreview] = useState<string | null>(null); // State to hold the image preview URL

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile); // Create a URL for the selected file
      setImagePreview(imageUrl); // Set the preview URL in state
    }
  };

  return (
    <div className={`w-full relative ${wrapperStyle}`}>
      <label
        className={`flexCenter form_image-label rounded-xl ${
          errors?.[id] && "!border-red-600 outline-none"
        }`}
        htmlFor={id}
      >
        {(imagePreview && (
          <div className="-mt-16 -mb-16">
            <Image
              src={imagePreview}
              height={200}
              width={200}
              alt="poster"
              className="rounded-md"
            />
          </div>
        )) ||
          label}
      </label>
      <Controller
        control={control}
        name={id}
        rules={{ required: required ? required : false }}
        render={({ field: { value, onChange, ...field } }) => {
          return (
            <input
              {...field}
              type={"file"}
              placeholder={placeholder}
              className={`form_image-input ${
                errors?.[id] && "border-red-600 outline-none"
              } form_field-input`}
              accept="image/*"
              onChange={(e) => {
                onChange(e.target.files?.[0]);
                handleFileChange(e);
              }}
            />
          );
        }}
      />

      {errors?.[id] && (
        <span className="text-red-600 text-[12px] mt-1">{`${errors?.[id]?.message}`}</span>
      )}
    </div>
  );
};

export default FormFileInput;
