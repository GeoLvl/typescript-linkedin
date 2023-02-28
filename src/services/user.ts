import user from "../mocks/user.json"
import { UserInterface } from "../models/User"

export function getUser() {
    return new Promise<UserInterface>((resolve) => resolve(user));
}

type updatableUserProps = Partial<Omit<UserInterface, "id">>

export function updateUser(updateUser: updatableUserProps) {
    return new Promise<UserInterface>((resolve) => resolve({...user, ... updateUser}));
}

updateUser({username: "Bobby"})

