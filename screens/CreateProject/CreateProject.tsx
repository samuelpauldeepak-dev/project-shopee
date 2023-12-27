"use client";
import { CustomMenu, Model } from "../../components";
import FormFileInput from "../../components/FormFileInput";
import FormInput from "../../components/FormInput";
import { useForm, FormProvider, useController } from "react-hook-form";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";
import { CancelIcon } from "../../resources";

const CreateProject = () => {
  const methods = useForm();
  const formSubmit = (data: any) => {
    if (!data.category) {
      methods.setError("category", {
        type: "required",
        message: "Please select a category.", // Set error message for the category field
      });
      return;
    }

    console.log(data);
  };
  const {
    field: { onChange, value },
  } = useController({
    name: "category",
    control: methods.control,
    defaultValue: "", // Set your default value here if needed
  });
  const handleCategorySelect = (selectedValue: string | any) => {
    onChange(selectedValue); // Update the form value when an option is selected
  };
  useEffect(() => {

    if (Object.keys(methods.formState.errors).length) {
      toast.warning("Required Fields are missing", {
        duration: 2000,
        position: "top-center",
        cancel: {
          label: "Clear",
          onClick: () => {
            toast.dismiss();
          },
        },
      });
    }
  }, [methods.formState.errors]);
  return (
    <Model heading={"Create a New Project"}>
      <FormProvider {...methods}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 10, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <div className="mt-4 px-2 lg:px-12 ">
            <form
              onSubmit={methods.handleSubmit(formSubmit)}
              className="h-full"
            >
              <FormFileInput
                id="poster"
                label="Choose a poster for you Project"
                required="This Field is required, Posters are needed for projects"
                wrapperStyle="flex flex-col"
              />
              <FormInput
                id="title"
                type="text"
                label="Title"
                placeholder="Project Shopee"
                className="border-[2px] border-gray-200 p-4 rounded-xl mt-[2px]"
                wrapperStyle="flex flex-col mt-6"
                required="This Field is required"
              />
              <FormInput
                id="description"
                type="text"
                label="Description"
                placeholder="Showcase and discover remarkable developer Projects"
                className="border-[2px] border-gray-200 p-4 rounded-xl mt-[2px]"
                wrapperStyle="flex flex-col mt-6"
                required="This Field is required"
              />
              <CustomMenu
                id={"category"}
                label="Categories"
                onSelect={handleCategorySelect}
                selectedValue={value}
                error={methods?.formState?.errors?.category}
              />
              <FormInput
                id="websiteUrl"
                type="text"
                label="Website URL"
                placeholder="https://www.example.com"
                className="border-[2px] border-gray-200 p-4 rounded-xl mt-[2px]"
                wrapperStyle="flex flex-col mt-6"
                required="This Field is required"
              />
              <FormInput
                id="githubUrl"
                type="text"
                label="Github URL"
                placeholder="https://www.github.com"
                className="border-[2px] border-gray-200 p-4 rounded-xl mt-[2px]"
                wrapperStyle="flex flex-col mt-6"
                required="This Field is required"
              />

              <button
                type="submit"
                className="btn bg-blue-500 hover:bg-blue-500/80 text-white  btn-wide  my-7 p-5 flex h-full"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </FormProvider>
    </Model>
  );
};

export default CreateProject;
