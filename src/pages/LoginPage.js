import { Authenticator } from '@aws-amplify/ui-react';
import MyPage from "./MyPage";

const LoginPage = () => {
    return (
        <Authenticator signUpAttributes={[
            'email',
            'nickname',
            ]}>
        {({ signOut, user }) => (
            <Authenticator.Provider>
                <MyPage />
            </Authenticator.Provider>
        )}
        </Authenticator>
      );
}

export default LoginPage;
