import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
    return (
        <footer className="text-muted mt-4 mb-2 text-center">
            <p>
                <small>
                    Made with ♥ for{" "}
                    <a href="https://www.wtrl.racing" rel="noopener noreferrer" target="_blank">
                        WTRL
                    </a>{" "}
                    by{" "}
                    <a href="mailto:tttt@andipaetzold.com" rel="noopener noreferrer" target="_blank">
                        Andi P&auml;tzold
                    </a>, extended by the Zwift Crushin Daddies
                </small>
            </p>
            <p>
                <small>
                    <a href="https://github.com/andipaetzold/tttt" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                </small>
            </p>
        </footer>
    );
}
