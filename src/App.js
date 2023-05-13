import { Amplify, I18n } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UserEdit from "./pages/UserEdit";
import Layout from "./pages/Layout";
import User from "./pages/User";
import MyPage from "./pages/MyPage";

import { Authenticator, translations } from '@aws-amplify/ui-react';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

// https://ui.docs.amplify.aws/react/connected-components/authenticator/customization#internationalization-i18n
I18n.putVocabularies(translations);
I18n.setLanguage('ja');

// https://github.com/aws-amplify/amplify-ui/blob/main/packages/ui/src/i18n/dictionaries/authenticator/en.ts
I18n.putVocabularies({
  ja: {
    'Sign in': 'ログインする',
    'Sign In': 'ログイン',
    'Sign Up': '会員登録する',
    'Create Account': '会員登録',
    'Email': 'メールアドレス',
    'Enter your Email': 'メールアドレスを入力してください',
    'Enter your Password': 'パスワードを入力してください',
    'Password': 'パスワード',
    'Please confirm your Password': '確認用パスワードを入力してください',
    'Nickname': 'ニックネーム',
    'Enter your Nickname': 'ニックネームを入力してください',
    'Your passwords must match': 'パスワードを合致させてください',
    'Invalid verification code provided, please try again.': '確認コードに誤りがあるため、再度お試しください',
    'Back to Sign In': 'ログイン画面に戻る',
    'Cannot reset password for the user as there is no registered/verified email or phone_number': '会員登録されていないためパスワードリセットできません',
  },
});

function App() {
  return (
    <Authenticator.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<MyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<User />} />
            <Route path="/user_edit" element={<UserEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Authenticator.Provider>
  );
}

export default App;
