export type RegisterTypes = {
    name: string;
    email: string;
    password: string;
};

export type LoginTypes = {
    email: string;
    password: string;
};

export type LogoutTypes = {
    refresh: string;
};

export type RefreshTokenTypes = {
    refresh: string;
};

export type ResponseRegisterTypes = {};

export type ResponseLoginTypes = {};

export type ResponseLogoutTypes = {};
