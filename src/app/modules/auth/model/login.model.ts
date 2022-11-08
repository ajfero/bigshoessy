export interface SigninPost {
    email: string,
    password: string
}
export interface SignupPost {
    email: string
    name: string,
    password: string,
    confirmPassword?: string,
}

export interface SigninGet {
    id: string,
    token: string,
    tokenType: string
}
export interface SignupGet {
    token: string,
    tokenType: string
}

export interface Auth {
    acess_token: string,
}
