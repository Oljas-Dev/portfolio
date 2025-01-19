import { useMutation } from "@tanstack/react-query";
import { updateState } from "../../services/apiStates";

export default function useUpdateSetting() {
  const { mutate: updatingState, isLoading: isUpdating } = useMutation({
    mutationFn: updateState,
    onSuccess: () => {
      console.log("state is updated");
    },
  });

  return { updatingState, isUpdating };
}
