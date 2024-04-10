"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "~/shadcn/ui/button";

const Dashboard = () => {
  const router = useRouter();
  const register = () => {
    router.push("/patient");
  };

  return (
    <>
      <div className=" grid h-full w-full grid-cols-2 gap-2 p-2">
        <div className="grid gap-2">
          <div className="box-border rounded-md bg-white p-4 shadow-md">
            <h1 className="text-4xl font-medium">Welcome to Health App</h1>
            <p className="mb-7 text-xl">An optimal app for various tasks:</p>
            <p className="text-md mb-5">
              Lorem ipsum dolor sit amet, simul nominati definiebas ius eu, ne
              eius summo rationibus pro. At error sensibus sbsa hsba hashv
              knidig hbas bhdbsh dbshbdhs iwina winishwknai sjna jaubc
              rationibus ius, qui et appetere instructior consectetuer, saepe
              laudem moderatius his cu. Est option indoctum volutpat ea, vitae
              dicant duo an. Ea idque copiosae eos, autem mollis cu duo. Mea cu
              mutat mundi deterruisset. Ius debitis dolorem efficiendi at, ex
              sea patrioque constituto. Dicant epicuri ut est, in eam ignota
              accommodare.
            </p>
            <div className="flex items-center justify-center gap-[20rem]">
              <div className="grid gap-2">
                <label className="text-xl"> Register a Patient </label>
                <Button
                  onClick={register}
                  className="h-12  rounded-md bg-green-400 hover:bg-green-500"
                >
                  Register
                </Button>
              </div>
              <div className="grid gap-2">
                <label className="text-xl">Patients list</label>
                <Button className="h-12 rounded-md bg-green-400 hover:bg-green-500">
                  Enter
                </Button>
              </div>
            </div>
          </div>
          <div className="box-border rounded-md bg-white p-4 shadow-md">
            <h1 className="">Welcome to Health App</h1>
            <p>An optimal app for various tasks</p>
            <p className="text-md mb-5">
              Lorem ipsum dolor sit amet, simul nominati definiebas ius eu, ne
              eius summo rationibus pro. At error sensibus rationibus ius, qui
              et appetere instructior consectetuer, saepe laudem moderatius his
              cu. Est option indoctum volutpat ea, vitae dicant duo an. Ea idque
              copiosae eos, autem mollis cu duo. Mea cu mutat mundi
              deterruisset. Ius debitis dolorem efficiendi at, ex sea patrioque
              constituto. Dicant epicuri ut est, in eam ignota accommodare. Ut
              autem doming invenire quo, usu amet repudiandae te. Et tale brute
              dicant usu, no enim democritum argumentum per. Pro meis equidem
              appellantur ad, has errem verterem ut.
            </p>
          </div>
        </div>
        <div className="rounded-md bg-white shadow-md">
          <Image src="/graph.png" alt="graph" height={100} width={100} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
