import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = [
  'Fill up Address',
  'Confirm Address',
  'Pay',
];

export default function ProgressBar({page}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={page} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
   
    </Box>
   
  );
}