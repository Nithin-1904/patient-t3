import React from "react";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/dataTable";
import { api } from "~/trpc/react";



const page = () => {
  const data =  api.patient.getValues;
  return (
    <>
      <div className="m-9 rounded-md bg-white p-16 pt-12 shadow-xl">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-5xl font-medium text-green-500">
              {" "}
              Patient List
            </h1>
            <p className="text-xl">
              Look out for the details of registered patients.
            </p>
          </div>
          <div className="text-right">
            <h1 className="text-3xl font-medium text-green-500">
              Celeritaz Health Pvt Ltd
            </h1>
            <p className="text-lg"> 12-45/2 Amigo Street, Darwin Colony</p>
          </div>
        </div>
        <hr className="my-3 border-[1px] border-gray-700" />
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default page;
