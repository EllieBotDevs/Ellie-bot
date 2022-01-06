"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseCommand {
    constructor(name, category, aliases) {
        this.name = name;
        this.category = category;
        this.aliases = aliases;
    }
    getName() { return this.name; }
    getCategory() { return this.category; }
    getAliases() { return this.aliases; }
}
exports.default = BaseCommand;
