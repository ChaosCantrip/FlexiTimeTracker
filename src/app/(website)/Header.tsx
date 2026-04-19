import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() 
{
    return (
        <header className={styles.header}>
            <h1>FlexiTimeTracker</h1>
            <div className={styles.nav}>
                <Link href="/">Weekly Overview</Link>
            </div>
        </header>
    );
}
