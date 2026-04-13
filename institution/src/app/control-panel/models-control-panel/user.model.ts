export type UserStatus = 'active' | 'inactive' | 'pending';

export interface User {
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    status: UserStatus;
}
export interface CreateUserForm {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    status: UserStatus;
}

export interface EditUserForm extends User {
    newPassword?: string;
}

export interface ResetPasswordForm {
    userId: string;
    newPassword: string;
    confirm: string;
}