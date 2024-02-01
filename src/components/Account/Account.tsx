import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'

import "./Account.css";

const Account = () => {
    return (
        <div className="account">
            <div className="avatar">
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="account_title">
                <div>Вы зарегистрированиы</div>
                <div>Администратор</div>
            </div>
        </div>
    )
};

export default Account;
