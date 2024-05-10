import { useSelector } from 'react-redux';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Pages/Home';
import './app.css';

const themes = {
  light: `${__dirname}../light.css`,
  dark: `${__dirname}../dark.css`,
};


function App() {
  return (
    <ThemeSwitcherProvider
        defaultTheme={useSelector((state) =>
          state.theme.value ? "light" : "dark"
        )}
        themeMap={themes}
      >
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
      </ThemeSwitcherProvider>
  );
}

export default App;
