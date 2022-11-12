import { ProfileInformation } from "./profile"

export interface InformationUser {
    id: string
    email: string
    name?: string
    role?: string
    createdAt?: string
    updatedAt?: string
    profile: ProfileInformation
} 