import { Card, Grid, IconButton } from '@mui/material';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import React from 'react';
import { ITrack } from '../types/track';
import styles from '../styles/TrackItem.module.scss';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
    return (
        <Card className={styles.track}>
            <IconButton>
                {active
                    ? <Pause />
                    : <PlayArrow />
                }
            </IconButton>
            <img width={70} height={70} src={track.picture} />
            <Grid container direction='column' style={{ width: 200, margin: '0 20px' }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton onClick={e => e.stopPropagation()} style={{ marginLeft: 'auto' }}>
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem;