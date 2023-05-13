import { useAuthenticator } from '@aws-amplify/ui-react';

const MyPage = () => {
    const { user, route, signOut } = useAuthenticator((context) => [
        context.user,
        context.route,
    ]);
    return (
        <>
            {
                route !== 'authenticated' ? 
                ''
                :
                <>
                    <h6>ようこそ、{user.attributes.nickname}さん</h6>
                </>
            }
        </>
    );
}

export default MyPage;