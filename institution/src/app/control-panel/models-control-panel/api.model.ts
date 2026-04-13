export interface ServiceResponse<T> {
    data: T;
    message: string;
    success: boolean;
    statusCode: number;
}

export interface IApplicationUser {
    id: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
}

export interface LogInResponse {
    token: string;
    userId: string;
}

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface UpdateUserRequest {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
}

export interface ResetPasswordRequest {
    userId: string;
    newPassword: string;
}

export interface ForgotPasswordRequest {
    email: string;
}