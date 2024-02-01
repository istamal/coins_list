import _ from "lodash";

export const returnPaginationRange = (totalPages: number, page: number, limit: number, siblings: number) => {
    let totalPageNumberInArray = 7 + siblings;

    if (totalPageNumberInArray >= totalPages) {
        _.range(1, totalPages + 1);
    }

    let leftSiblingsIndex = Math.max(page - siblings, 1);
    let rightSiblingsIndex = Math.min(page + siblings, totalPages);

    let showLeftDots = leftSiblingsIndex > 1;
    let showRightDots = rightSiblingsIndex < totalPages - 1;

    if (!showLeftDots && showRightDots) {
        let leftItemsCount = 3 + 1 * siblings;
        let leftRange = _.range(1, leftItemsCount + 1);
        return [...leftRange, " ...", totalPages];
    } else if (showLeftDots && !showRightDots) {
        let rightItemsCount = 3 + 1 * siblings;
        let rightRange = _.range(totalPages - rightItemsCount + 1, totalPages + 1);
        
        return [1, "... ", ...rightRange];
    } else {
        let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
        return [1, "... ", ...middleRange, " ...", totalPages];
    }
}