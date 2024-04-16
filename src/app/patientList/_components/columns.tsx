"use client";
import { type ColumnDef } from "@tanstack/react-table";
import { Button } from "~/shadcn/ui/button";
import {ArrowUpDown} from 'lucide-react' 

export type Patient = {
  id: string;
  patient_name: string;
  department: string;
};

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey:"id",
    header: "ID",
  },
  {
    accessorKey:"patient_name",
    header: ({ column }) => {
        return (
          <Button
          className="text-2xl pl-0 hover:text-green-600 hover:bg-slate-50"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey:"department",
    header: "Department",
  },
  {
    accessorKey:"submittedAt",
    header: "Submitted At",
  }

]