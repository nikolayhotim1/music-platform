import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { Card, Grid, IconButton } from '@mui/material';
import React from 'react'
import { ITrack } from '../../../../types/track';
import './TrackItem.scss';

interface TrackItemProps {
    track: ITrack,
    active?: boolean
}

function TrackItem({ track, active = false }: TrackItemProps) {
    return (
        <Card className='track'>
            <IconButton>
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
            <IconButton className='delete'>
                <Delete />
            </IconButton>
        </Card>
    );
}

export default TrackItem;