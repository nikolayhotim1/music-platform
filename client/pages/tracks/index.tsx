import { Button, Card, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import React from 'react';
import TrackList from '../../components/TrackList';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        { _id: '620ab695775cd2d8e25b899b', name: 'We are the champions', artist: 'Queen', text: 'We are the champions', listens: 0, audio: 'http://localhost:5000/audio/6d00600f-f3d4-4e7b-86a2-b4887e1695d9.mp3', picture: 'http://localhost:5000/image/df87bdf0-c845-4465-ac18-c0330a70fab4.jpg', comments: [] }
    ];

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{ width: 900 }}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Track list</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Upload</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;