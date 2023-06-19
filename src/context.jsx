import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

export const AppContext = createContext();

const initialState = [
  {
    name: "",
    image: "",
    para: "",
  },
];

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const homePageUpdate = () => {
    return dispatch({
      name: "Update_Home",
      payload: {
        name: "Mubashir Hussain",
        image: "./images/hero.svg",
        para: "I'm Mubashir Hussainss. A Front End Developer, and freelancer. A Front End Developer and freelancer.",
      },
    });
  };
  const aboutPageUpdate = () => {
    return dispatch({
      name: "Update_About",
      payload: {
        name: "Mubashir Hussain",
        image: "./images/hero.svg",
        para: " As a passionate front-end developer, I thrive on crafting seamless and engaging user experiences. With a keen eye for design and a deep understanding of HTML, CSS, and JavaScript",
      },
    });
  };
  return (
    <AppContext.Provider value={{ ...state, homePageUpdate, aboutPageUpdate }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
