"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const reqBody = zod_1.z.object({ title: zod_1.z.string(), author: zod_1.z.string() });
const books = [];
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns all books
 */
router.get("/", (req, res) => res.send(books));
router.post("/", (req, res) => {
    const body = reqBody.parse(req.body);
    books.push(body);
    res.send(body);
});
exports.default = router;
