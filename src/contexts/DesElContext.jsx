import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { getState } from "../services/apiStates";
import { getSamples } from "../services/apiSamples";
import { getDevArticles } from "../services/apiDevArticles";

const DesignElementsContext = createContext();

function DesignElementsProvider({ children }) {
  const { data: states } = useQuery({
    queryKey: ["states"],
    queryFn: getState,
  });
  const { data: portfolioArticles, isLoadingPortfolio } = useQuery({
    queryKey: ["development"],
    queryFn: getSamples,
  });

  // Preloading high res images

  const { data: devArticles, isLoadingArticles } = useQuery({
    queryKey: ["dev-articles"],
    queryFn: getDevArticles,
  });

  const [currentState, setCurrentState] = useState(0);

  const articles = portfolioArticles?.concat(devArticles);

  const queryStates = states?.at(currentState);
  return (
    <DesignElementsContext.Provider
      value={{
        page: queryStates?.page,
        path: queryStates?.path,
        mode: queryStates?.mode,
        mainbtn: queryStates?.mainbtn,
        plus: queryStates?.plus,
        compass: queryStates?.compass,
        setCurrentState,
        portfolioArticles,
        devArticles,
        articles,
        isLoadingPortfolio,
        isLoadingArticles,
      }}
    >
      {children}
    </DesignElementsContext.Provider>
  );
}

DesignElementsProvider.propTypes = {
  children: PropTypes.any,
};

export { DesignElementsContext, DesignElementsProvider };
