import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Button ,Grid,Typography} from '@mui/material';

const Ch = () => {
  return (
    <div>
         <Button
      sx={{
        backgroundColor: '#FAF7F7',
        width: '204px',
        height: '70px',
        marginTop: '26px',
        borderRadius: '10px',
        '&:hover': {
          backgroundColor: '#BED6C5', // Change to desired green color
        },
      }}
    >
      <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container lg={5}>
          <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
        </Grid>
        <Grid container lg={5}>
          <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
            COA
          </Typography>
        </Grid>
      </Grid>
    </Button>
    </div>
  );
}

export default Ch;
