//import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
//import { useTheme, View, Text, Heading, Button } from '@aws-amplify/ui-react';
import MyPage from "./MyPage";
/*
// https://ui.docs.amplify.aws/react/connected-components/authenticator/customization
const components = {
  // 共通フッター
  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; Twin kangaroos All Rights Reserved
        </Text>
      </View>
    );
  },
  // ログイン
  // ━━━━━━━━━━
  SignIn: {
    // ログインのヘッダー
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={4}
        >
          ログイン
        </Heading>
      );
    },
    // ログインのフッター
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            パスワードを忘れた方
          </Button>
        </View>
      );
    },
  },
  // 会員登録
  // ━━━━━━━━━━
  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={4}
        >
          Twin kangaroosに会員登録
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            ログイン画面に戻る
          </Button>
        </View>
      );
    },
  },
  // 会員登録画面→確認コードの確認
  // ━━━━━━━━━━
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        > 
          確認コードの入力
        </Heading>
      );
    },
    Footer() {
      return <Text></Text>;
    },
  },
};
*/
const LoginPage = () => {
    console.log("LoginPage.js start...");
    return (
        <Authenticator signUpAttributes={[
            'email',
            'nickname',
            ]} 
        >
        {({ signOut, user }) => (
            <MyPage />
        )}
        </Authenticator>
      );
}

export default LoginPage;

//components={components}