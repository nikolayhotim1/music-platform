import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { Card, Grid, IconButton } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ITrack } from '../../../../types/track';
import './TrackItem.scss';

interface TrackItemProps {
    track: ITrack,
    active?: boolean
}

function TrackItem({ track, active = false }: TrackItemProps) {
    const navigate = useNavigate();

    return (
        <Card
            className='track'
            onClick={() => navigate(`/tracks/${track._id}`)}
        >
            <IconButton onClick={e => e.stopPropagation()}>
                {active
                    ? <Pause />
                    : <PlayArrow />
                }
            </IconButton>
            <img src={track.picture} alt='Track cover' />
            <Grid
                className='track-info'
                container
                direction='column'
            >
                <div className='track-name'>{track.name}</div>
                <div className='track-artist'>{track.artist}</div>
            </Grid>
            {active && <div>00:00 / 03:30</div>}
            <IconButton
                onClick={e => e.stopPropagation()}
                className='delete'
            >
                <Delete />
            </IconButton>
        </Card>
    );
}

export default TrackItem;