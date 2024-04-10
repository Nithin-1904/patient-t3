import React from "react";
import Text from "./_components/Text";
import Radio from "./_components/Radio";
import { department, gender } from "./values";
import Options from "./_components/Options";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type PatientElements } from "./_components/types";

const page = () => {

  const {register,handleSubmit, formState:{errors} } = useForm();
  
  const onSubmit:SubmitHandler<PatientElements> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-5 rounded-md bg-white p-16 pt-12 shadow-xl dark:bg-gray-800 dark:text-white">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-4xl font-medium text-green-500">
                {" "}
                Patient form
              </h1>
              <p className="text-md">
                Fill the details to register the patient
              </p>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-medium text-green-500">
                Celeritaz Health Pvt Ltd
              </h1>
              <p> 12-45/2 Amigo Street, Darwin Colony</p>
            </div>
          </div>
          <hr className="my-3 border-[1px] border-gray-700" />
          <div className="grid grid-cols-2 justify-center gap-x-16 gap-y-8 p-4">
            <Text
              name="doc_name"
              label="Doctor Name"
              placeholder="Doctor Name"
              type="text"
              register={register}
              error={errors.doc_name}
            />
            <Options label="Department" name="department" values={department} placeholder="Department" error={errors.department}/>
            <Text
              name="patient_name"
              label="Patient Name"
              placeholder="Full name"
              type="text"
              error={errors.patient}
            />
            <Text
              name="careof"
              label="Parent/Guardian Name"
              placeholder="Full name"
              type="text"
            />
            <Text name="age" label="Age" placeholder="Age" type="number" />
            <Radio label="Gender" name="gender" values={gender} />
            <Text name="email" label="Email" placeholder="Email" type="email" />
            <Text name="occupation" label="Occupation" placeholder="Occupation" type="text" />
          </div>
        </div>
      </form>
    </>
  );
};

export default page;
