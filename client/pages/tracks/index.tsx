import { Button, Card, Grid } from '@mui/material';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const Index = () => {
    return (
        <MainLayout>
            <Grid container>
                <Card>
                    <Grid container justifyContent='space-between'>
                        <h1>Track list</h1>
                        <Button>Upload</Button>
                    </Grid>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;