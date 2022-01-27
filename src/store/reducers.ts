type UserState = {
    type: string,
    user: IUser,
    isAuth: boolean;
    isLoading: boolean,
}

const initialState : UserState = {}