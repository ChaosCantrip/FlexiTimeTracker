import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GITHUB_ICON = <FontAwesomeIcon icon={faGithub} />

export default function Footer() 
{
    return (
        <footer className={styles.footer}>
            <p><a href="https://github.com/ChaosCantrip/FlexiTimeTracker">{GITHUB_ICON} FlexiTimeTracker</a> created by <a href="https://github.com/ChaosCantrip">{GITHUB_ICON} ChaosCantrip</a></p>
        </footer>
    )
}
