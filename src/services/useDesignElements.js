import { useContext } from "react";
import { DesignElementsContext } from "../contexts/DesElContext";

function useDesignElements() {
  const context = useContext(DesignElementsContext);

  if (context === undefined)
    throw new Error("Context is used outside of the DesignElementsContext.");
  return context;
}
export { useDesignElements };
