import {
    createSelector
} from 'reselect';

const getUsersSelector = (state) => {
    return state.usersPage.users
};
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u => true);
    });

const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize
};
export const getPageSize = createSelector(getPageSizeSelector,
    (pageSize) => {
        return pageSize
    });

export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}


export const getcurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}


export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
}


export const getFollowInProgressSelector = (state) => {
    return state.usersPage.followInProgress
}