"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerEvents = exports.registerCommands = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
function registerCommands(client, dir = '') {
    return __awaiter(this, void 0, void 0, function* () {
        const filePath = path_1.default.join(__dirname, dir);
        const files = yield fs_1.promises.readdir(filePath);
        for (const file of files) {
            const stat = yield fs_1.promises.lstat(path_1.default.join(filePath, file));
            if (stat.isDirectory())
                registerCommands(client, path_1.default.join(dir, file));
            if (file.endsWith('.js') || file.endsWith('.ts')) {
                const { default: Command } = yield Promise.resolve().then(() => __importStar(require(path_1.default.join(dir, file))));
                const command = new Command();
                client.commands.set(command.getName(), command);
                command.getAliases().forEach((alias) => {
                    client.commands.set(alias, command);
                });
            }
        }
    });
}
exports.registerCommands = registerCommands;
function registerEvents(client, dir = '') {
    return __awaiter(this, void 0, void 0, function* () {
        const filePath = path_1.default.join(__dirname, dir);
        const files = yield fs_1.promises.readdir(filePath);
        for (const file of files) {
            const stat = yield fs_1.promises.lstat(path_1.default.join(filePath, file));
            if (stat.isDirectory())
                registerEvents(client, path_1.default.join(dir, file));
            if (file.endsWith('.js') || file.endsWith('.ts')) {
                const { default: Event } = yield Promise.resolve().then(() => __importStar(require(path_1.default.join(dir, file))));
                const event = new Event();
                client.events.set(event.getName(), event);
                client.on(event.getName(), event.run.bind(event, client));
            }
        }
    });
}
exports.registerEvents = registerEvents;
