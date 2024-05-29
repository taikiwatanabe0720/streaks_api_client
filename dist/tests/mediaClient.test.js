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
const mediaClient_1 = __importDefault(require("../clients/mediaClient"));
describe("MediaClient", () => {
    test('get one media', () => __awaiter(void 0, void 0, void 0, function* () {
        const client = new mediaClient_1.default({ apiKey: "7b6ca2083e3845d39de15dde480db39c", projectId: "logiclogic" });
        const media = yield client.getMedia('80a87fabdc6f4c1588b1ed45006693c2');
        expect(media).toHaveProperty('id', '80a87fabdc6f4c1588b1ed45006693c2');
        expect(media).toHaveProperty('name', 'wata_test');
        expect(Array.isArray(media.tracks)).toBe(true);
    }));
    test('put one media', () => __awaiter(void 0, void 0, void 0, function* () {
        const client = new mediaClient_1.default({ apiKey: "7b6ca2083e3845d39de15dde480db39c", projectId: "logiclogic" });
        const media = yield client.updateMedia('80a87fabdc6f4c1588b1ed45006693c2', { name: "hugahuga" });
        expect(media).toHaveProperty('id', '80a87fabdc6f4c1588b1ed45006693c2');
        expect(media).toHaveProperty('name', 'hugahuga');
        expect(Array.isArray(media.tracks)).toBe(true);
    }));
});
