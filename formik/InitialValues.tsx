export interface LoginValues {
    email: string,
    password: string,
    checkbox: boolean,
}

export const loginInitialValue: LoginValues =
    { email: '', password: '', checkbox: false }