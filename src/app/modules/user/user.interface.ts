export type TUser = {
    id: string;
    password: string;
    needsPasswordChange: boolean;
    role: 'admin' | 'student' | 'faculty';
    status: 'in-progres' | 'blocked';
    isDeleted: boolean;
}