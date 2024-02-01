import Account from "../Account/Account";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "./Header.css";

const Header = () => {
    return (
        <div className="header layout">
            <div className="left">
                <div>BitTest</div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Моя организация
                </div>
            </div>
            <div className="right">
                <Account />
            </div>
        </div>
    )
}

export default Header;