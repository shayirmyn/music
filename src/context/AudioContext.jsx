import {createContext, useState} from "react";
import trackLIst from "../assets/trackLIst.jsx";

export const AudioContext = createContext({});

const audio = new Audio();

const AudioProvider = ({children}) => {
    const [currentTrack, setCurrentTrack] = useState(trackLIst[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleToggleAudio = (track) => {
        if (currentTrack.id !== track.id) {
            setCurrentTrack(track);
            setIsPlaying(true);

            audio.src = track.src;
            audio.currentTime = 0;
            audio.play();

            return;
        }

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
    };

    const value = { audio, currentTrack, isPlaying, handleToggleAudio }

    return <AudioContext.Provider value={value}>{ children }</AudioContext.Provider>
};

export default AudioProvider;

