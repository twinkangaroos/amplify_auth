import { Authenticator } from '@aws-amplify/ui-react';
import UserPage from "./UserPage";

const User = () => {
    return (
        <Authenticator signUpAttributes={[
            'email',
            'nickname',
            ]} 
        >
        {({ signOut, user }) => (
            <UserPage />
        )}
        </Authenticator>
    );
}

export default User;
