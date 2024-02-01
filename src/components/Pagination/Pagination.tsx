import { MouseEventHandler } from "react";
import { returnPaginationRange } from "../../utils/utils";

import "./Pagination.css";

type PaginationProps = {
    totalPages: number;
    page: number;
    limit: number;
    siblings: number;
    onSwitchPage: (evt: string | number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, page, limit, siblings, onSwitchPage }) => {
    const pages = returnPaginationRange(totalPages, page, limit, siblings);

    return (
        <ul className="pagination">
            <li onClick={() => onSwitchPage("&laquo;")} className="pagiantion__page-item">&laquo;</li>
            {pages.map((value) => {
                if (value === page) {
                    return <li key={value} onClick={() => onSwitchPage(value)} className="pagiantion__page-item active">{value}</li>
                } else {
                    return <li key={value} onClick={() => onSwitchPage(value)} className="pagiantion__page-item">{value}</li>
                }
            })}
            <li onClick={() => onSwitchPage("&raquo;")} className="pagiantion__page-item">&raquo;</li>
        </ul>
    )
}

export default Pagination;
