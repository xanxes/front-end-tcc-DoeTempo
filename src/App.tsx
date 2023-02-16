import { Header } from "./components/Header";
import { Pessoas } from "./components/Peoples";
import { GlobalStyle } from "./styles/global";
import {Campos} from "./components/Inputs";

export function App() {
  return (
    <>
      <Header />
      <Pessoas />
      <GlobalStyle />
    </>
  );
}