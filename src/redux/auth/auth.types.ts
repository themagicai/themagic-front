export type RegisterTypes = {
    password: string;
    name: string;
    phoneNumber: string;
    roleName: string;
};

export type LoginTypes = {
    username: string;
    password: string;
};

export type LogoutTypes = {
    refresh: string
}