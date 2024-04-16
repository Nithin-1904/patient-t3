"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "~/shadcn/ui/button";
import { api } from "~/trpc/react";

const Dashboard =  () => {
  const router = useRouter();

  const register = () => {
    router.push("/patientForm");
  };

  const list = () => {
    router.push("/patientList");
  };
  
  const hello = api.login.getMail;

  return (
    <>
      <nav className="bg-white shadow-md w-full rounded-b-md flex justify-between items-center p-4">
        <div className="flex items-baseline gap-3">
          <h1 className="text-5xl font-medium">{hello}</h1>
          <p className="text-xl font-medium tracking-tighter"> <span className="text-4xl text-green-500 tracking-tighter">Celeritaz</span>  Pvt Ltd</p>
        </div>
        <div>
          <ul className="flex gap-10">
            <Link href="/dashboard"><li className="text-green-500 font-medium text-xl">Home</li></Link>
            <Link href="/dashboard"><li className="text-green-500 font-medium text-xl">About</li></Link>
            <Link href="/patientForm"><li className="text-green-500 font-medium text-xl">Form</li></Link>
            <Link href="/dashboard"><li className="text-green-500 font-medium text-xl">FAQs</li></Link>
            <Link href="/dashboard"><li className="text-green-500 font-medium text-xl">Support</li></Link>
          </ul>
        </div>
      </nav>
      <div className=" grid h-screen w-full grid-cols-2 gap-2 p-2">
        <div className="grid gap-2">
          <div className="box-border rounded-md bg-white p-4 shadow-md">
            <h1 className="text-3xl font-medium"> Welcome to Celertiaz </h1>
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
                <Button onClick={list} className="h-12 rounded-md bg-green-400 hover:bg-green-500">
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
        <div className="rounded-md bg-white shadow-md p-4">
          <p>
            abso dion aid osind asnd osanduedne n dian due dnaus duasnd edbnwhd
            najnd jsand dbehdb asdna hdnbh debjd bahsbd hAND HEDB EHDB AHD
            HSANDHSBDH EDBEHDN CED HBHN n h ahd heb dhea h Lorem ipsum dolor sit
            amet, simul nominati definiebas ius eu, ne eius summo rationibus
            pro. At error sensibus sbsa hsba hashv knidig hbas bhdbsh dbshbdhs
            iwina winishwknai sjna jaubc rationibus ius, qui et appetere
            instructior consectetuer, saepe laudem moderatius his cu. Est option
            indoctum volutpat ea, vitae dicant duo an. Ea idque copiosae eos,
            autem mollis cu duo. Mea cu mutat mundi deterruisset. Ius debitis
            dolorem efficiendi at, ex sea patrioque constituto. Dicant epicuri
            ut est, in eam ignota accommodare. abso dion aid osind asnd
            osanduedne n dian due dnaus duasnd edbnwhd najnd jsand dbehdb asdna
            hdnbh debjd bahsbd hAND HEDB EHDB AHD HSANDHSBDH EDBEHDN CED HBHN n
            h ahd heb dhea h Lorem ipsum dolor sit amet, simul nominati
            definiebas ius eu, ne eius summo rationibus pro. At error sensibus
            sbsa hsba hashv knidig hbas bhdbsh dbshbdhs iwina winishwknai sjna
            jaubc rationibus ius, qui et appetere instructior consectetuer,
            saepe laudem moderatius his cu. Est option indoctum volutpat ea,
            vitae dicant duo an. Ea idque copiosae eos, autem mollis cu duo. Mea
            cu mutat mundi deterruisset. Ius debitis dolorem efficiendi at, ex
            sea patrioque constituto. Dicant epicuri ut est, in eam ignota
            accommodare. abso dion aid osind asnd osanduedne n dian due dnaus
            duasnd edbnwhd najnd jsand dbehdb asdna hdnbh debjd bahsbd hAND HEDB
            EHDB AHD HSANDHSBDH EDBEHDN CED HBHN n h ahd heb dhea h Lorem ipsum
            dolor sit amet, simul nominati definiebas ius eu, ne eius summo
            rationibus pro. At error sensibus sbsa hsba hashv knidig hbas bhdbsh
            dbshbdhs iwina winishwknai sjna jaubc rationibus ius, qui et
            appetere instructior consectetuer, saepe laudem moderatius his cu.
            Est option indoctum volutpat ea, vitae dicant duo an. Ea idque
            copiosae eos, autem mollis cu duo. Mea cu mutat mundi deterruisset.
            Ius debitis dolorem efficiendi at, ex sea patrioque constituto.
            Dicant epicuri ut est, in eam ignota accommodare.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
