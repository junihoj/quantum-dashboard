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
import { useQueryClient } from "@tanstack/react-query";
import PencilIcon from "@/components/icons/pencil-icon";

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
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
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

  const watchedField = form.watch(["firstName", "lastName", "occupation"]);
  // console.log(form.formState.errors);
  const isDisabled = () => {
    return watchedField.some((field) => field == undefined);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col bg-white gap-y-10 overflow-y-auto px-8 py-6"
      >
        {/* <CustomToast id="id" message="" success={false} /> */}
        {preview || avatar ? (
          <div className="flex justify-center relative">
            <Image
              src={preview != "" ? preview : (avatar as string)}
              alt="preview"
              width={100}
              height={100}
              className="w-24 h-24 rounded-[100%]"
            />
            <Button
              className="absolute mx-auto left-0 -bottom-8 w-fit bg-system-red-1 right-0 "
              //  -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600
              title="Change photo"
              onClick={() => {
                setPreview("");
              }}
              type="button"
            >
              Remove image
            </Button>
          </div>
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
                placeholder="Select Occupation"
              />
            )}
            schema={AccountFormSchema}
          />
        </div>
        <Button
          className="py-[17.5px] bodyText-regular text-base"
          variant="fill"
          disabled={isDisabled()}
          type="submit"
        >
          Save
        </Button>
      </form>
    </Form>
  );
};

export default AccountForm;
