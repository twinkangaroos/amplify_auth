import { useAuthenticator } from '@aws-amplify/ui-react';
import { useState } from "react";
import { Auth } from 'aws-amplify';
import { Flex, Button, TextField, Heading, Link, Icon, Divider } from '@aws-amplify/ui-react';
import { useNavigate } from "react-router-dom";

const UserEditPage = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const [nickname, setNickname] = useState(user.attributes.nickname);
    const [email, setEmail] = useState(user.attributes.email);
    const navigate = useNavigate();

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
            console.log("ユーザー情報を更新しました！");
            navigate('/user');
        }
        else {
            alert("ユーザー情報の更新に失敗しました・・・");
        }
        return result;
    }

    return (
        <Flex direction="column" gap="1rem" alignItems="flex-start">
            <Flex direction="row">
                <Link href="/user">
                    <Icon
                        pathData="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59Z"
                        viewBox={{
                            width: 20,
                            height: 26,
                        }}
                        width="20"
                        height="26"
                        color="gray"
                        ariaLabel="back"
                    />
                </Link>
                <Heading level={4}>アカウント変更</Heading>
            </Flex>
            <Divider orientation="horizontal" />

            <Flex>
                <TextField
                    descriptiveText=""
                    defaultValue={user.attributes.email}
                    label="メールアドレス"
                    errorMessage=""
                    width="20rem"
                    onChange={e => setEmail(e.target.value)}
                />
            </Flex>

            <Flex>
                <TextField
                    descriptiveText=""
                    defaultValue={user.attributes.nickname}
                    label="ニックネーム"
                    errorMessage=""
                    width="20rem"
                    onChange={e => setNickname(e.target.value)}
                />
            </Flex>
            <Flex>
                <Button size="small" onClick={() => window.location.href = '/user'}>キャンセル</Button>
                <Button size="small" variation="primary" onClick={() => updateUserInfo()}>保存</Button>
            </Flex>
      
        </Flex>
    );
}

export default UserEditPage;
