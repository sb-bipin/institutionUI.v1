export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponseDto {
    token: string;
}

export interface LoginUser {
    id: string;
    email: string;
    name: string;
    role: string;
}