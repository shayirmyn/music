import { useState } from "react";
import tracksLIst from "../../assets/trackLIst";
import style from "./mainPage.module.scss";
import Track from "../../components/Track/Track";
import { Input } from "@mui/material";

const runSearch = (query) => {
    if (!query) {
        return tracksLIst;
    }

    const lowerCaseQuery = query.toLowerCase();

    return tracksLIst.filter(
        (track) =>
            track.title.toLowerCase().includes(lowerCaseQuery) ||
            track.artists.toLowerCase().includes(lowerCaseQuery)
    );
};

const MainPage = () => {
    const [tracks, setTracks] = useState(tracksLIst);

    const handleChange = (event) => {
        const foundTracks = runSearch(event.target.value);
        setTracks(foundTracks);
    };

    return (
        <div className={style.search}>
            <Input
                className={style.input}
                placeholder="Поиск треков"
                onChange={handleChange}
            />
            <div className={style.list}>
                {tracks.map((track) => (
                    <Track key={track.id} {...track} />
                ))}
            </div>
        </div>
    );
};

export default MainPage;