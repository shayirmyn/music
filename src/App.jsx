import './App.css';
import MainPage from "./pages/MainPages/MainPage.jsx";
import style from "./global.module.scss";
import PlayBar from "./components/PlayBar/PlayBar.jsx";

const App = () =>
    <div className={style.wrapper}>
        <MainPage/>
        <PlayBar />
    </div>;

export default App
