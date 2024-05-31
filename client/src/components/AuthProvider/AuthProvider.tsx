import { PropsWithChildren } from 'react';

export type AuthProviderProps = PropsWithChildren & {
    isSignedIn: boolean;
};

export default function AuthProvider({
    isSignedIn,
    children,
}: AuthProviderProps) {
    return;
}
