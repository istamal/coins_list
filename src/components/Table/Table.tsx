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
                    <td data-id={person.id} onClick={itemClick}>{person?.email}</td>
                    <td data-id={person.id} onClick={itemClick}>{person?.name}</td>
                    <td data-id={person.id} onClick={itemClick}>{person?.role}</td>
                    <td data-id={person.id} onClick={itemClick}>{person?.subscription?.plan.type}</td>
                    <td data-id={person.id} onClick={itemClick}>{person?.subscription?.tokens}</td>
                    <td>
                    <svg data-name="Layer 3" id="Layer_3" viewBox="0 0 2050 2050" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><title/><path className="cls-1" d="M503.6,1165.9a45,45,0,0,1-44.8-48.9l14.4-164.6a44.9,44.9,0,0,1,13-27.9L947.8,462.9a45.1,45.1,0,0,1,63.6,0l150.2,150.3a44.9,44.9,0,0,1,0,63.6L700,1138.4a44.4,44.4,0,0,1-27.9,13l-164.5,14.3Zm164.6-59.4Z"/><path className="cls-1" d="M1560.8,1113.6H926.3a45,45,0,0,1,0-90h634.5a45,45,0,1,1,0,90Z"/><path className="cls-1" d="M1560.8,1338.4H503.6a45,45,0,1,1,0-90H1560.8a45,45,0,0,1,0,90Z"/><path className="cls-1" d="M1560.8,1563.2H503.6a45,45,0,0,1,0-90H1560.8a45,45,0,0,1,0,90Z"/></svg>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	                    viewBox="0 0 268.476 268.476">
                    <g id="Delete__x2F__Trash">
                        <path d="M63.119,250.254c0,0,3.999,18.222,24.583,18.222h93.072
                            c20.583,0,24.582-18.222,24.582-18.222l18.374-178.66H44.746L63.119,250.254z M170.035,98.442c0-4.943,4.006-8.949,8.949-8.949
                            c4.943,0,8.95,4.006,8.95,8.949l-8.95,134.238c0,4.943-4.007,8.949-8.949,8.949c-4.942,0-8.949-4.007-8.949-8.949L170.035,98.442z
                            M125.289,98.442c0-4.943,4.007-8.949,8.949-8.949c4.943,0,8.949,4.006,8.949,8.949v134.238c0,4.943-4.006,8.949-8.949,8.949
                            c-4.943,0-8.949-4.007-8.949-8.949V98.442z M89.492,89.492c4.943,0,8.949,4.006,8.949,8.949l8.95,134.238
                            c0,4.943-4.007,8.949-8.95,8.949c-4.942,0-8.949-4.007-8.949-8.949L80.543,98.442C80.543,93.499,84.55,89.492,89.492,89.492z
                            M218.36,35.811h-39.376V17.899C178.984,4.322,174.593,0,161.086,0L107.39,0C95.001,0,89.492,6.001,89.492,17.899v17.913H50.116
                            c-7.914,0-14.319,6.007-14.319,13.43c0,7.424,6.405,13.431,14.319,13.431H218.36c7.914,0,14.319-6.007,14.319-13.431
                            C232.679,41.819,226.274,35.811,218.36,35.811z M161.086,35.811h-53.695l0.001-17.913h53.695V35.811z"/>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>
                    </td>
                </tr>
            ))}
        </table>
    )
};

export default Table;
