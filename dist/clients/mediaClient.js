"use strict";
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
const axios_1 = __importDefault(require("axios"));
const settings_1 = require("../settings/settings");
class MediaClient {
    constructor(apiCredentials) {
        this.client = axios_1.default.create({
            baseURL: settings_1.baseURL,
        });
        this.projectId = apiCredentials.projectId;
        this.apiKey = apiCredentials.apiKey;
    }
    getMedia(mediaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get(`/v1/projects/${this.projectId}/medias/${mediaId}`, { headers: { 'X-Streaks-Api-Key': this.apiKey, "Content-Type": "application/json" } });
            return response.data;
        });
    }
    updateMedia(mediaId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.put(`/v1/projects/${this.projectId}/medias/${mediaId}`, params, { headers: { 'X-Streaks-Api-Key': this.apiKey, "Content-Type": "application/json" } });
            return response.data;
        });
    }
}
exports.default = MediaClient;
