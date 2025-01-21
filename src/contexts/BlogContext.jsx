import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import useLocalStorageState from "../hooks/useLocalStorage";

// 1)Create new context

const ToggleContext = createContext();

function ToggleProvider({ children }) {
  const [colorThemeToggle, setColorThemeToggle] = useState(true);
  const [colorsMobile, setColorsMobile] = useState(true);
  const [newMarker, setNewMarker] = useState();
  const [appTheme, setAppTheme] = useLocalStorageState("dark", "appTheme");
  const [selectedColor, setSelectedColor] = useState(appTheme);
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (appTheme === "olive") {
  //       setAppTheme("dark");
  //       document.documentElement.classList = "";
  //       document.documentElement.classList.add("dark-theme");
  //       setSelectedColor("dark");
  //     }
  //   }, 5000);
  // }, [setAppTheme, appTheme]);

  useEffect(
    function () {
      if (appTheme === "olive") {
        changeTheme("olive");
      } else if (appTheme === "metallic") {
        changeTheme("metallic");
      } else if (appTheme === "dark") {
        changeTheme("dark");
      }
    },
    [appTheme]
  );

  function changeTheme(theme) {
    document.documentElement.classList = "";
    document.documentElement.classList.add(`${theme}-theme`);
  }

  function handleToggle() {
    setColorThemeToggle((toggle) => !toggle);
  }

  function handleMobileToggle() {
    setColorsMobile((toggle) => !toggle);
    setColorThemeToggle(false);
  }

  function handleSelectedColor(obj) {
    if (obj.inProgress)
      return toast.error(
        `Sorry, but ${obj.background} color theme is still in progress⚒️`
      );

    if (!obj.inProgress) {
      setSelectedColor(obj.background);
      setAppTheme(obj.background);
      handleToggle();
      return toast.success(`${obj.background} color theme is now active`);
    }
  }

  const onScroll = (event) => {
    if (event.target.scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const colors = [
    {
      id: 1,
      color: "var(--color-mtext)",
      background: "cyan",
      icon: "cyan",
      inProgress: true,
    },
    {
      id: 2,
      color: "var(--color-mtext)",
      background: "lightyellow",
      icon: "lightyellow",
      inProgress: true,
    },
    {
      id: 3,
      color: "var(--color-mtext)",
      background: "dark",
      icon: "#151444",
      inProgress: false,
    },
    {
      id: 4,
      color: "var(--color-mtext)",
      background: "metallic",
      icon: "#8A8875",
      inProgress: false,
    },
    {
      id: 5,
      color: "var(--color-mtext)",
      background: "olive",
      icon: "olive",
      inProgress: false,
    },
  ];

  return (
    <ToggleContext.Provider
      value={{
        colorThemeToggle,
        setColorThemeToggle,
        colorsMobile,
        handleToggle,
        handleMobileToggle,
        colors,
        selectedColor,
        handleSelectedColor,
        newMarker,
        setNewMarker,
        appTheme,
        setAppTheme,
        onScroll,
        scrolled,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}

function useToggle() {
  const context = useContext(ToggleContext);

  if (context === undefined)
    throw new Error("Cannot use context outside ToggleContext");
  return context;
}

ToggleProvider.propTypes = {
  children: PropTypes.any,
};

export { ToggleProvider, useToggle };
