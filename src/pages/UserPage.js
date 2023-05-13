import { useAuthenticator } from '@aws-amplify/ui-react';

const UserPage = () => {
    const { user } = useAuthenticator((context) => [context.user]);

    return (
        <>
            <>
                <h4>アカウント設定</h4>
            </>
            <>
                ニックネーム：{user.attributes.nickname}
            </>
            <>
                メールアドレス：{user.attributes.email}
            </>
        </>
    );
}

export default UserPage;
