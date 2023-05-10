import { Authenticator } from '@aws-amplify/ui-react';
import UserEditPage from "./UserEditPage";

const UserEdit = () => {
    return (
        <Authenticator signUpAttributes={[
            'email',
            'nickname',
            ]}>
        {({ signOut, user }) => (
            <Authenticator.Provider>
                <UserEditPage />
            </Authenticator.Provider>
        )}
        </Authenticator>
    );
}

export default UserEdit;