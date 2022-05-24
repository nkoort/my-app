import * as axios from 'axios';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '7afab6ee-a127-475a-a2b3-185381f3f8a1',
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    getUser() {
        return instance.get('users')
    },
    unfollow(id) {
        return instance.delete(`follow/` + id)
    },
    follow(id) {
        return instance.post(`follow/` + id)
    },
    getStatus(id) {
        return instance.get('profile/status/' + id)
    },
    updateStatus(body) {
        return instance.put('profile/status', {status: body} );
    },
}

export const profileAPI = {
    getProfile(id = 2) {
        return instance.get('profile/' + id)
    },
    authMe() {
        return instance.get(`auth/me`)
    },

}

export const loginAPI = {
    login(emailUser, passwordUser, rememberMeUser) {
        return instance.post('auth/login/', {
            email: emailUser,
            password: passwordUser,
            rememberMe: rememberMeUser,
        })
    },
    logout() {
        return instance.delete('auth/login/')
    },
};


