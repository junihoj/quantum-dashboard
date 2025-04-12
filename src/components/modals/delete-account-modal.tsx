import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
// import WarningIcon from "@public/icons/warning.svg";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";
import { apiService } from "@/lib/apiService";
import { toast } from "sonner";
import CustomToast from "../globals/custom-toast";

type Props = {
  id: string;
  name: string;
};
const DeleteAccountModal = ({ id, name }: Props) => {
  const [open, setOpen] = useState(false);

  const handleDeleteAccount = async () => {
    try {
      await apiService({
        url: `/accounts/${id}`,
        method: "delete",
      });
      toast.custom((id) => {
        return (
          <CustomToast
            id={id}
            message={`Account ${name} deleted
            } successfully.`}
          />
        );
      });
      setOpen(false);
    } catch (err) {
      toast.custom((id) => {
        return (
          <CustomToast
            id={id}
            message={`An error occurred while trying to delete account ${name}. Please try again!`}
            success={false}
          />
        );
      });
    }
  };
  return (
    <Dialog open={open}>
      <Button
        variant="destructive"
        className="cursor-pointer w-fit"
        onClick={() => setOpen(true)}
      >
        delete
      </Button>
      <DialogContent className="flex flex-col gap-y-8 p-6" showClose={false}>
        <DialogTitle className="sr-only">Delete Appointment Modal</DialogTitle>

        <div className="flex flex-col gap-y-4 items-center">
          <CircleAlert />
          <div className="flex flex-col gap-y-1 items-center">
            <h2 className="text-center font-bold text-[1.125rem] text-[#181D27]">
              Delete
            </h2>
            <p className="text-center text-[#535862] font-medium text-sm tracking-normal">
              Are you sure you want to delete this account {name}? This action
              cannot be undone.
            </p>
          </div>
        </div>

        <div className="flex justify-between w-full gap-x-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setOpen(false)}
          >
            No
          </Button>
          <Button
            className="bg-[#D92D20] border-none rounded-lg font-bold flex-1"
            onClick={handleDeleteAccount}
          >
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAccountModal;
