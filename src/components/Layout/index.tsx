import {ReactNode, useEffect} from 'react';
import {useSession} from '#/store/session'
import style from '#/styles/Layout.module.css';

interface Props {
    children: ReactNode;
}


export default function Layout({children}: Props) {
    const {user, setUser} = useSession();
    useEffect(() => {
        setUser({name: 'Rodrigo Hernandez', id: 1, lastConnection: new Date().toString()})
    }, [])
    return (
        <>
            <header className={style.header}><h1>My app</h1></header>
            <h2>Welcome {user?.name}</h2>
            <main className={style.main}>{children}</main>
            <footer className={style.footer}><h3>My app</h3></footer>
        </>
    )
}