import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ITrack } from '../../types/track';
import './Player.scss';
import TrackProgress from './track_progress/TrackProgress';

let audio: HTMLAudioElement;

function Player() {
    // const track: ITrack = { _id: '620ab695775cd2d8e25b899b', name: 'We are the champions', artist: 'Queen', text: 'We are the champions', listens: 0, audio: 'http://localhost:5000/audio/6d00600f-f3d4-4e7b-86a2-b4887e1695d9.mp3', picture: 'http://localhost:5000/image/df87bdf0-c845-4465-ac18-c0330a70fab4.jpg', comments: [] };
    const { pause, volume, active, duration, currentTime } = useTypedSelector(state => state.player);
    const { playTrack, pauseTrack, setActiveTrack, setDuration, setCurrentTime, setVolume } = useActions();

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
            play();
        }
    }, [active]);

    const setAudio = () => {
        if (active) {
            audio.src = active.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration));
            };
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime));
            };
        }
    };

    const play = () => {
        if (pause) {
            playTrack();
            audio.play();
        } else {
            pauseTrack();
            audio.pause();
        }
    };

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100;
        setVolume(Number(e.target.value));
    };

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value);
        setCurrentTime(Number(e.target.value));
    };

    if (!active) {
        return null;
    }

    return (
        <div className='player'>
            <IconButton onClick={play}>
                {pause
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <Grid
                className='track-info'
                container
                direction='column'
            >
                <div className='track-name'>{active?.name}</div>
                <div className='track-artist'>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
            <VolumeUp className='volume-up' />
            <TrackProgress left={volume} right={100} onChange={changeVolume} />
        </div>
    );
}

export default Player;