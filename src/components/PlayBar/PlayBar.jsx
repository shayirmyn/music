import {useContext, useEffect, useState} from "react";
import {AudioContext} from "../../context/AudioContext.jsx";
import style from "./playbar.module.scss";
import {Slider} from "@mui/material";
import {PlayArrow, Pause } from "@mui/icons-material";
import {IconButton} from "@mui/material";
import secondToMMSS from "../../utils/secondToMMSS.jsx";

const PlayBar = () => {
    const {audio, currentTrack, handleToggleAudio, isPlaying} = useContext(AudioContext);

    const [currentTime, setCurrentTime] = useState(0);


    const { title, artists, preview, duration } = currentTrack;

    const formattedDuration = secondToMMSS(duration);

    const formattedCurrentTime = secondToMMSS(currentTime);

    const handleChangeCurrentTime = (_, value) => {
        const time = Math.round((value / 100) * duration);
        setCurrentTime(time);
        audio.currentTime = time;
    };

    const sliderCurrentTime = Math.round(currentTime / duration * 100);
    useEffect(() => {
        setInterval(() => {
            setCurrentTime(audio.currentTime);
        }, 1000);
    }, []);

    return <div className={style.playbar}>
        <img className={style.preview} src={preview} alt=""/>
        <IconButton onClick={() => handleToggleAudio(currentTrack)}>
            {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        <div className={style.credits}>
            <h4>{title}</h4>
            <p>{artists}</p>
        </div>
        <div className={style.slider}>
            <p>{formattedCurrentTime}</p>
            <Slider step={1} min={0} max={100} value={sliderCurrentTime} onChange={handleChangeCurrentTime}/>
            <p>{formattedDuration}</p>
        </div>
    </div>;
};
export default PlayBar;