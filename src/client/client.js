"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class DiscordClient extends discord_js_1.Client {
    constructor(options) {
        super(options);
        this._commands = new discord_js_1.Collection();
        this._events = new discord_js_1.Collection();
        this._prefix = '!';
    }
    get commands() { return this._commands; }
    get events() { return this._events; }
    get prefix() { return this._prefix; }
    set prefix(prefix) { this._prefix = prefix; }
}
exports.default = DiscordClient;
