export type RegisterTypes = {
    name: string;
    email: string;
    password: string;
};

export type LoginTypes = {
    data: {
        email: string;
        password: string;
    }
};

export type LogoutTypes = {
    refresh: string;
};
