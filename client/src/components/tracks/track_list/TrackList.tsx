import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ITrack } from '../../../types/track';
import TrackItem from './track_item/TrackItem';

interface TrackListProps {
    tracks: ITrack[]
}

function TrackList({ tracks }: TrackListProps) {
    return (
        <Grid container direction='column'>
            <Box p={2}>
                {tracks.map(track =>
                    <TrackItem
                        key={track._id}
                        track={track}
                    />
                )}
            </Box>
        </Grid>
    );
}

export default TrackList;