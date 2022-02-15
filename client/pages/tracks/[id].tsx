import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const TrackPage = () => {
    const track: ITrack = { _id: '620ab695775cd2d8e25b899b', name: 'We are the champions', artist: 'Queen', text: 'We are the champions', listens: 0, audio: 'http://localhost:5000/audio/6d00600f-f3d4-4e7b-86a2-b4887e1695d9.mp3', picture: 'http://localhost:5000/image/df87bdf0-c845-4465-ac18-c0330a70fab4.jpg', comments: [] };
    const router = useRouter();

    return (
        <MainLayout>
            <Button
                onClick={() => router.push('/tracks')}
                variant={'outlined'}
                style={{ fontSize: 32 }}
            >
                To the list
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={track.picture} alt="Track picture" width={200} height={200} />
                <div style={{ margin: '20px 0' }}>
                    <h1>Track name - {track.name}</h1>
                    <h2>Artist - {track.artist}</h2>
                    <h3>Listens - {track.listens}</h3>
                </div>
            </Grid>
            <h2>Track text</h2>
            <p>{track.text}</p>
            <h2>Comments</h2>
            <Grid container>
                <TextField
                    label='Your name'
                    fullWidth
                />
                <TextField
                    label='Comment'
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Send</Button>
            </Grid>
            <div>
                {track.comments.map(comment => 
                    <div>
                        <div>Author - {comment.username}</div>
                        <div>Comment - {comment.text}</div>
                    </div>    
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;