import { useAuthenticator } from '@aws-amplify/ui-react';
import { Icon, View, Heading, Flex, Text, useTheme, Divider, Link, SwitchField } from '@aws-amplify/ui-react';

const UserPage = () => {
    const { user } = useAuthenticator((context) => [context.user]);
    const { tokens } = useTheme();

    return (
        <>
            <Flex direction="column" gap="1rem" alignItems="flex-start">
                <Heading level={4}>アカウント設定</Heading>
            </Flex>
            <View
                backgroundColor={tokens.colors.background.secondary}
                padding={tokens.space.large}
            >
                <Flex direction="column">
                    <Flex direction="row">
                        <Link href="/">
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
                        <Heading level={5}>アカウント</Heading>
                    </Flex>
                    <Divider orientation="horizontal" />
                    
                    <Flex direction="row">
                        <Flex direction="column" alignItems="flex-start" padding="1rem">
                            <Link href="/user_edit">
                                <Flex direction="row" alignItems="flex-end" padding="0.5rem">
                                    <Flex direction="column">
                                        <Text as="span" fontWeight={800}>
                                            ニックネーム
                                        </Text>
                                        <Text as="span">
                                            {user.attributes.nickname}
                                        </Text>
                                    </Flex>
                                    変更
                                </Flex>
                            </Link>

                            <Link href="/user_edit">
                                <Flex direction="row" alignItems="flex-end" padding="0.5rem">
                                    <Flex direction="column">
                                        <Text as="span" fontWeight={800}>
                                            メールアドレス
                                        </Text>
                                        <Text as="span">
                                            {user.attributes.email}
                                        </Text>
                                    </Flex>
                                    変更
                                </Flex>
                            </Link>

                            <Link href="/user_edit">
                                <Flex direction="row" alignItems="flex-end" padding="0.5rem">
                                    <Flex direction="column">
                                        <Text as="span" fontWeight={800}>
                                            パスワード
                                        </Text>
                                        <Text as="span">
                                            **********
                                        </Text>
                                    </Flex>
                                    変更
                                </Flex>
                            </Link>

                            <Flex direction="row" alignItems="flex-end" padding="0.5rem">    
                                <Text as="span" fontWeight={800}>
                                    メールマガジンを受け取る
                                </Text>
                                <SwitchField
                                    trackColor={tokens.colors.lightgray}
                                    trackCheckedColor={tokens.colors.red}
                                    //isChecked={true}
                                    isDisabled={false}
                                    label=""
                                    labelPosition="start"
                                />
                            </Flex>
                            
                        </Flex>
                    </Flex>
                    
                </Flex>
            </View>
        </>
    );
}

export default UserPage;
