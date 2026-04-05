export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponseDto {
    token: string;
}

export interface ServiceResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}