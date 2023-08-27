import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faSquareGithub, faLinkedin,} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){

    return(
        <footer className="footer bg-dark text-white text-center py-3 mt-5">
            <div>
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.twitter.com/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    >
                    <FontAwesomeIcon icon={faSquareTwitter} size="xl" style={{color: "#ffffff",}} />
                </a>
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.linkedin.com/in/richard-nguyen-114745146/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    >
                    <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#ffffff",}} />
                </a>
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://github.com/rxn3202"
                    role="button"
                    data-mdb-ripple-color="dark"
                    >
                    <FontAwesomeIcon icon={faSquareGithub} size="xl" style={{color: "#ffffff",}} />
                </a>
            </div>

            <div>
                <p>&copy; 2023 Richard nguyen. All rights reserved.</p>
            </div>
        </footer>
    );

}