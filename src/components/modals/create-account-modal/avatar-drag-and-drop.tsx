import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
type Props = {
  setAvatar: (avatar: string) => void;
};

const AvatarDragAndDrop = ({ setAvatar }: Props) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files

    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result as string;
      // setPreview(base64); // Optional preview
      setAvatar(base64); // Send base64 to parent for submission
    };

    if (file) {
      reader.readAsDataURL(file); // Converts to base64
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });
  return (
    <div className="flex flex-col gap-y-4">
      <div {...getRootProps({ className: "flex justify-center" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="">
            <p>Drop Here</p>
          </div>
        ) : (
          <div className="w-fit h-fit flex items-center justify-center border border-dashed border-system-primary rounded-[50%] p-5">
            <Image
              src={"/assets/images/file-upload-image.jpg"}
              alt="upload"
              width={100}
              height={100}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-y-[0.625rem] text-center">
        <Button
          variant="transparent"
          className={cn(
            "font-normal text-system-primary leading-[100%] underline text-sm",
            "hover:text-system-primary/90"
          )}
          type="button"
          onClick={() => {
            open();
          }}
        >
          Choose an image
        </Button>
        <p className="bodyText-regular text-system-grey-1 text-center">
          or drag and drop the image here
        </p>
      </div>
    </div>
  );
};

export default AvatarDragAndDrop;
