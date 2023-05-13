import { View, Heading, Flex, Link } from '@aws-amplify/ui-react';

const Home = () => {
    
    return (
        <>
            <View padding="1rem">
                <Heading level={5} padding="0.5rem">React Amplifyの事例</Heading>
                <Flex direction="column" padding="0.5rem">
                    React Amplifyは、AWSのバックエンドサービスをフロントエンドアプリケーションに統合するためのライブラリです。以下に、React Amplifyを使用して開発された成功事例をいくつか紹介します。
                </Flex>
                <Heading level={6} padding="0.5rem">1.Intuit QuickBooks</Heading>
                <Flex direction="column" padding="0.5rem">
                    Intuit QuickBooksは、小規模企業向けの会計ソフトウェアです。React Amplifyを使用して、ユーザー認証、ファイルのアップロード、データの保存などの機能を実装しています。
                </Flex>
                <Heading level={6} padding="0.5rem">2.Comcast</Heading>
                <Flex direction="column" padding="0.5rem">
                    Comcastは、米国のケーブルテレビ・インターネットサービスプロバイダーです。React Amplifyを使用して、Xfinityストリーミングサービスのサブスクリプション管理などの機能を実装しています。
                </Flex>
                <Heading level={6} padding="0.5rem">3.Philips Hue</Heading>
                <Flex direction="column" padding="0.5rem">
                    Philips Hueは、LED照明を制御するIoT製品です。React Amplifyを使用して、ユーザー認証、デバイスの追加、シナリオの作成などの機能を実装しています。
                </Flex>
            </View>

        </>
    );
}

export default Home;
