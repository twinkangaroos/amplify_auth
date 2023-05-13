import { Outlet } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Link } from '@aws-amplify/ui-react';

const Layout = () => {
    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);
    
    return (
        <>
            <>
                <h3><Link href="/">Twin kangaroos</Link></h3>
            </>
            <>
                {
                    route === 'authenticated' ?
                    <>
                        <button onClick={signOut}>ログアウト</button>
                    </>
                    :
                    <>
                        <button onClick={() => window.location.href = '/login'}>ログイン</button>
                    </>
                }
            </>
            <>
                {
                    route !== 'authenticated' ?
                    <>
                        ログインすると会員限定コンテンツを見ることができます。
                    </>
                    :
                    ''
                }
                <Outlet />
            </>
        </>
    );
}

export default Layout;