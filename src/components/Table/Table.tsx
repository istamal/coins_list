import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import "./Table.css";

export type PersonData = {
    id: string;
    name: string;
    email: string;
    password: null;
    avatar: null;
    created_at: string;
    role: string;
    tg_id: null;
    subscription: {
        id: string;
        plan_id: string;
        user_id: string;
        additional_tokens: number;
        created_at: string;
        tokens: number;
        plan: {
            id: string;
            price: number;
            currency: string;
            tokens: number;
            type: string;
        }
    }
}

type TableProp = {
    data: Array<PersonData> | any;
    itemClick?: ({ target }: React.SyntheticEvent) => Promise<void>;
    onSort?: () => void;
    sortMode?: boolean;
}

const Table: React.FC<TableProp> = ({ data, itemClick, onSort, sortMode }) => {
    return (
        <table className="table">
            <tr className="table__header">
                <th>email</th>
                <th>name</th>
                <th>role</th>
                <th>account</th>
                <th onClick={onSort}>tokens {sortMode ? (<span>&#8595;</span>) : (<span>&#8593;</span>)}</th>
                <th></th>
            </tr>
            {data.length && data.map((person: PersonData) => (
                <tr key={person?.id}>
                    <td data-id={person?.id} onClick={itemClick}>{person?.email}</td>
                    <td data-id={person?.id} onClick={itemClick}>{person?.name}</td>
                    <td data-id={person?.id} onClick={itemClick}>{person?.role}</td>
                    <td data-id={person?.id} onClick={itemClick}>{person?.subscription?.plan.type}</td>
                    <td data-id={person?.id} onClick={itemClick}>{person?.subscription?.tokens}</td>
                    <td>
                        <FontAwesomeIcon icon={faPenAlt} />
                        <FontAwesomeIcon icon={faTrashCan} />
                    </td>
                </tr>
            ))}
        </table>
    )
};

export default Table;
