export declare class Client {
    constructor(token: string);
    
    #token: string;
    #inti(): Promise<void>;
    /**
    * Get a token
    */
    get token(): string;

    /**
    * Decrypt a text (that you have previously encrypted)
    * @param decryptedText The text that will be decrypt
    * @returns a decrypted Text
    */
    async deCrypt(decryptedText: string): Promise<string>;
    /**
     * Encrypt a text
     * @param encryptedText The text that will be encrypte 
     * @returns a encrypted Text
     */
    async enCrypt(encryptedText: string): Promise<string>;
    /**
     * Generate a token for encrypt/decrypt
     */
    static async generateToken(): Promise<string>;
}