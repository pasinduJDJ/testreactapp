import {Grid2, Typography} from "@mui/material"

const UserForm = props => {
    return (
        <Grid2
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom : '30px',
                display: 'block',
            }}
        >
            <Grid2 item xs={12}>
                <Typography component={'h1'} sx={{color: '#ffffff'}}>User Form</Typography>
            </Grid2>
        </Grid2>
    );

}

export default UserForm;
