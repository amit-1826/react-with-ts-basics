import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Timers from "./components/Timers";
import TimersContextProvider from "./store/TimersContextProvider";

function App() {
  return (
    <TimersContextProvider>
      <main>
        <Header></Header>
        <AddTimer></AddTimer>
        <Timers></Timers>
      </main>
    </TimersContextProvider>
  );
}

export default App;
