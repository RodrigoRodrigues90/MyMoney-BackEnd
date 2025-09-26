export declare function generateHash(password: string): Promise<string>;
export declare function verifyPassword(password: string, hash: string): Promise<boolean>;
