const { WebSocketRequest } = require("../webSocket");
exports.Client = void 0;
class Client {
    #token = "";
    constructor(token) {
        this.#token = token;
        this.#init();
    }
    /**
     * Get a token
     */
    get token() {
        return this.#token;
    }
    /**
     * Decrypt a text (that you have previously encrypted)
     * @param {String} decryptedText The text that will be decrypt
     * @returns {Promise<String>} a decrypted Text
     */
    async deCrypt(decryptedText) {
        if (typeof(decryptedText) !== "string") throw new Error("The value is not a string");
        const result = await WebSocketRequest({type: "deCrypt", token: this.#token, text: decryptedText});

        if (result.type !== "success") throw new Error("Error "+result.content);
        return result.content;
    }
        /**
     * Encrypt a text
     * @param {String} encryptedText The text that will be encrypte
     * @returns {Promise<String>} a encrypted Text
     */
    async enCrypt(encryptedText) {
        if (typeof(encryptedText) !== "string") throw new Error("The value is not a string");
        const result = await WebSocketRequest({type: "enCrypt", token: this.#token, text: encryptedText});

        if (result.type !== "success") throw new Error(`Error ${result.content}`);
        return result.content;
    }
    async #init() {
        const result = await WebSocketRequest({type: "getToken", token: this.#token});
        if (result.type !== "success") throw new Error(`Error ${result.content}`);
    }
    static async generateToken() {
        const result = await WebSocketRequest({type: "generateToken"});
        if (result.type === "success") {
            return result.token;
        } throw new Error(`Error ${result.content}`);
    }
}

exports.Client = Client;