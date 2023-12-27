"use client";
import { Menu } from "@headlessui/react";
import { categoryFilters } from "../constants";
import { ArrowDown } from "../resources";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type Tprops = {
  id: string;
  label: string;
  onSelect: (selectedValue: string | any) => void;
  selectedValue: string;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};
const CustomMenu = ({ id, label, onSelect, selectedValue, error }: Tprops) => {
  return (
    <>
      <div className="flexStart flex-col w-full  relative mt-6">
        <label htmlFor={id} className="w-full ">
          {label}
        </label>
        <Menu as={"div"} className={`self-start relative mt-2`}>
          <div>
            <Menu.Button className={`flexCenter custom_menu-btn`}>
              {selectedValue || "Select a Category"}
              <ArrowDown className="w-[25px] h-[25px]" />
            </Menu.Button>
          </div>
          <Menu.Items className=" flexStart custom_menu-items">
            {categoryFilters.map((tag, index): any => {
              return (
                <Menu.Item key={tag}>
                  <button
                    type="button"
                    className="custom_menu-item"
                    onClick={() => onSelect(tag)}
                  >
                    {tag}
                  </button>
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Menu>
      </div>
      {error?.message && (
        <span className="text-red-600 text-[12px] mt-1">{`${error?.message}`}</span>
      )}
    </>
  );
};

export default CustomMenu;
