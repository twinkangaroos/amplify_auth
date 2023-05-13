import { useAuthenticator } from '@aws-amplify/ui-react';
import { Heading, Flex, Tabs, TabItem } from '@aws-amplify/ui-react';
import Home from "./Home";

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
                <Flex direction="column" gap="1rem" alignItems="center">
                    <Heading level={6}>ようこそ、{user.attributes.nickname}さん</Heading>
                </Flex>
            }

            <Tabs justifyContent="flex-start">
                <TabItem title="Home">
                    <Home />
                </TabItem>
                <TabItem title="注目記事">
                    <Home />
                </TabItem>
                <TabItem title="トップ10">
                    <Home />
                </TabItem>
                <TabItem title="Premium" isDisabled={true}>
                    Cannot click
                </TabItem>
            </Tabs>

        </>
    );
}

export default MyPage;