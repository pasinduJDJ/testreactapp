import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const users = [
    {
        id: 1,
        name: "John",
    },
    {
        id: 2,
        name: "Pasindu",
    },
];
const Users = () => {
    return(
        <Box
            sx={{width:'calc(100%-100px)',margin:'auto'}}
            >
            <UserForm/>
            <UserTable rows={users}/>
        </Box>
    );

}

export default Users;