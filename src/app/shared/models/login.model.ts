export interface SigninPost {
    email: string,
    password: string
}
export interface SignupPost {
    email: string,
    name: string,
    password: string,
    confirmPassword?: string
}
export interface Auth {
    id: string
    token: string
}
