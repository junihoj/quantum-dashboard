import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import AvatarDragAndDrop from "./avatar-drag-and-drop";
import { CustomField } from "@/components/globals/custom-field";
import { CustomInput } from "@/components/globals/custom-input";
import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/globals/custom-select";
import { apiService } from "@/lib/apiService";
import CustomToast from "@/components/globals/custom-toast";
import { toast } from "sonner";
import { TOccupation } from "@/types";
import Image from "next/image";

const AccountFormSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  occupation: z.string(),
  avatar: z.string().optional(),
});

const occupationSelectItems: {
  label: string;
  value: TOccupation;
}[] = [
  { label: "Teacher", value: "TEACHER" },
  { label: "Designer", value: "DESIGNER" },
  { label: "Doctor", value: "DOCTOR" },
  { label: "engineer", value: "ENGINEER" },
  { label: "others", value: "OTHER" },
];

type Props = {
  firstName?: string;
  lastName?: string;
  occupation?: string;
  avatar?: string;
  setOpen: (val: boolean) => void;
  id?: string;
};

const AccountForm = ({
  firstName,
  lastName,
  avatar,
  occupation,
  setOpen,
  id,
}: Props) => {
  const [preview, setPreview] = useState("");
  const form = useForm<z.infer<typeof AccountFormSchema>>({
    resolver: zodResolver(AccountFormSchema),
    defaultValues: {
      firstName,
      lastName,
      avatar: avatar ?? "",
      occupation,
    },
  });

  const onSubmit = async (values: z.infer<typeof AccountFormSchema>) => {
    try {
      console.log("id here", id);
      if (id) {
        // if id which mean it is an update
        await apiService({
          url: `/accounts/${id}`,
          method: "put",
          data: { ...values, avatar: avatar ?? "" },
        });
      } else {
        await apiService({
          url: "/accounts",
          method: "post",
          data: values,
        });
      }

      form.reset({ avatar: "", firstName: "", lastName: "", occupation: "" });
      toast.custom((id) => {
        return (
          <CustomToast
            id={id}
            message={`Account holder details ${
              id ? "updated" : "created"
            } successfully.`}
          />
        );
      });

      setOpen(false);
    } catch (err) {
      toast.custom(
        (id) => {
          return (
            <CustomToast
              id={id}
              message="An error occurred while trying to create an account for an account holder. Please try again!"
              success={false}
            />
          );
        }
        // { duration: 50000 }
      );
    }
  };
  console.log(form.formState.errors);
  console.log("iddfdf", id);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col bg-white gap-y-10 overflow-y-auto px-8 py-6"
      >
        {/* <CustomToast id="id" message="" success={false} /> */}
        {preview ? (
          <Image src={preview} alt="preview" width={100} height={100} />
        ) : (
          <AvatarDragAndDrop
            setAvatar={(avatar: string) => {
              form.setValue("avatar", avatar);
              setPreview(avatar);
            }}
          />
        )}
        <div className="flex flex-col gap-y-4">
          <CustomField
            className="flex-1 w-full"
            control={form.control}
            name="firstName"
            formLabel="First Name"
            render={({ field }) => (
              <CustomInput
                className=""
                {...field}
                placeholder="Enter first name"
              />
            )}
            schema={AccountFormSchema}
          />
          <CustomField
            className="flex-1 w-full"
            control={form.control}
            name="lastName"
            formLabel="Last Name"
            render={({ field }) => (
              <CustomInput
                className=""
                {...field}
                placeholder="Enter last name"
              />
            )}
            schema={AccountFormSchema}
          />
          <CustomField
            className="flex-1 w-full"
            control={form.control}
            name="occupation"
            formLabel="Occupation"
            render={({ field }) => (
              <CustomSelect
                selectItems={occupationSelectItems}
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
            schema={AccountFormSchema}
          />
        </div>
        <Button
          className="py-[17.5px] bodyText-regular text-base"
          variant="fill"
          //   disabled={
          //     // !form.getValues("avatar") ||
          //     !form.getValues("firstName") ||
          //     !form.getValues("lastName") ||
          //     !form.getValues("occupation")
          //   }
          type="submit"
        >
          Save
        </Button>
      </form>
    </Form>
  );
};

export default AccountForm;
