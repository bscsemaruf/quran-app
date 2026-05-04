"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quran_json_1 = __importDefault(require("../data/quran.json"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    var _a;
    const q = (_a = req.query.q) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (!q)
        return res.json([]);
    const result = quran_json_1.default.filter((a) => a.translation.toLowerCase().includes(q) || a.arabic.includes(q));
    res.json(result.slice(0, 50));
});
exports.default = router;
