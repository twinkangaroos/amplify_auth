import { useAuthenticator } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";

const MyPage = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    return (
        <main>
            <h1>Hello {user.username}</h1>

            <li>email:{user.attributes.email}</li>
            <li>nickname:{user.attributes.nickname}</li>
            
            <button onClick={signOut}>Sign out</button>
            <p><Link to="/user_edit">ユーザー情報変更</Link></p>
        </main>
    );
}

export default MyPage;