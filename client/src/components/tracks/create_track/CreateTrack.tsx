import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import './CreateTrack.scss';
import FileUpload from './file-upload/FileUpload';
import StepWrapper from './step_wrapper/StepWrapper';

function CreateTrack() {
    const [activeStep, setActiveStep] = useState(0);
    const [pictture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    function next() {
        if (activeStep < 2) {
            setActiveStep(prev => prev + 1);
        }
    }

    function back() {
        setActiveStep(prev => prev - 1);
    }

    return (
        <div className='create-track'>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid
                        className='track-description'
                        container
                        direction='column'
                    >
                        <TextField
                            label='Track name'
                        />
                        <TextField
                            label='Artist'
                        />
                        <TextField
                            label='Text'
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload
                        setFile={setPicture}
                        accept='image/*'
                    >
                        <Button>Upload cover</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload
                        setFile={setAudio}
                        accept='audio/*'
                    >
                        <Button>Upload audio</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid
                container
                justifyContent='space-between'
            >
                <Button
                    disabled={activeStep === 0}
                    onClick={back}
                >
                    Back
                </Button>
                <Button onClick={next}>
                    Next
                </Button>
            </Grid>
        </div>
    );
}

export default CreateTrack;