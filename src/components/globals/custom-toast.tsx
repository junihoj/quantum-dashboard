import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { toast } from "sonner";

type Props = {
  //   variant: "success" | "error";
  id: string | number;
  success?: boolean;
  message: string;
};

const CustomToast = ({ success = true, message, id }: Props) => {
  return (
    <div
      className={cn(
        "flex w-full bg-system-red-6 p-[0.875rem] items-center justify-between rounded-2xl border border-system-red-2",
        {
          "border-system-green-1 bg-system-green-6": success,
        }
      )}
    >
      <div className="flex gap-x-2 items-center">
        {success ? (
          <span className="flex-1 justify-center items-center w-fit h-fit p-1 rounded-[50%] bg-system-green-1">
            {/* <CircleCheck className="fill-system-green-1 stroke-white" /> */}
            <Check className="stroke-white w-4 h-4 stroke-[4]" />
          </span>
        ) : (
          <span className="flex justify-center items-center w-fit h-fit p-2 rounded-[50%] bg-system-red-2 ">
            <X className="w-2 h-2 stroke-[2] stroke-white" />
          </span>
        )}
        <p className="bodyText-regular text-system-grey-1">{message}</p>
      </div>
      <Button
        variant="transparent"
        className="cursor-pointer w-fit z-[1000]"
        onClick={() => {
          toast.dismiss(id);
        }}
      >
        <X className="w-3 h-3 stroke-[1.5] stroke-system-grey-3" />
      </Button>
    </div>
  );
};

export default CustomToast;
