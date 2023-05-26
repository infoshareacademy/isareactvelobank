import { useUserContext } from "../../controllers/user-context"
import { PageWrapper } from "../../common/page-wrapper"

export const Home = () => {
    const user = useUserContext();
    
    return (
        <PageWrapper title={user ? `Welcome ${user.email}!` : 'Welcome stranger!'}>
            
        </PageWrapper>
    )
}