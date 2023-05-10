import { useAuthenticator } from '@aws-amplify/ui-react';
import { useState } from "react";
import { Auth } from 'aws-amplify';

const UserEditPage = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const [nickname, setNickname] = useState(user.attributes.nickname);

    console.log(nickname);

    async function updateUserInfo() {
        let result = null;
        try {
            const user = await Auth.currentAuthenticatedUser();
            result = await Auth.updateUserAttributes(user, {
                nickname: nickname
            });
        } catch(error) {
            console.log('error update: ', error);
        }
        if (result === 'SUCCESS') {
            alert("ユーザー情報を更新しました！");
        }
        else {
            alert("ユーザー情報の更新に失敗しました・・・");
        }
        return result;
    }

    return (
        <main>
            <li>email: <input defaultValue={user.attributes.email} /></li>
            <li>nickname: <input defaultValue={nickname} onChange={e => setNickname(e.target.value)} /></li>
            
            <p><button onClick={() => updateUserInfo()}>ユーザー情報を変更する</button></p>
            <p><button onClick={signOut}>ログアウトする</button></p>
        </main>
    );
}

export default UserEditPage;
