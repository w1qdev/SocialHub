import { User } from '@/types/User';

export const useAuth = (): User | null => {
    return { id: 1, username: 'John' };
};
