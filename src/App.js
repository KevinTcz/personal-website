import "./App.css";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import NavBar from "./components/NavBar";
import ContactForm from "./components/ContactForm";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <div className="App">
        <NavBar />
        <section className="App-header Home">Hi, I'm Kevin</section>
        <section className="Project">This is Project</section>
        <section className="Skill">This is Skill</section>
        <section className="Contact"><ContactForm /></section>
      </div>
    </ChakraBaseProvider>
  );
}
export default App;
