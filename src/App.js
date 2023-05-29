import "./App.css";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import NavBar from "./components/NavBar";

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
        <section className="Contact">This is Contact</section>
      </div>
    </ChakraBaseProvider>
  );
}
export default App;
