import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { Link } from 'react-router-dom';
import { useUserContext } from "../../controllers/user-context";
import { PageWrapper } from "../page-wrapper";

export const Auth = ({ children }: { children: ReactNode }) => {
    const user = useUserContext();

    return user 
        ? <>{children}</>
        : <PageWrapper title="Unauthorized">
            <Typography variant="h5">Please <Link to="/sign">sign in</Link> to see the content.</Typography>
        </PageWrapper>
}