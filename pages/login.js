import { useSession, signIn, signOut } from "next-auth/react"
import styles from '../styles/Home.module.css'

export default function Home() {
    const { data: session } = useSession();
    if (session) {
        return (
            <div className={styles.container}>
                Welcome user<br />
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            Click to sign into your user account <br />
            <button onClick={() => signIn()}>Sign in</button>
        </div>
    );
}