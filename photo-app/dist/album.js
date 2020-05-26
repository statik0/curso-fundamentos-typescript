"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
const item_1 = require("./item");
class Album extends item_1.Item {
    constructor(id, title) {
        super(id, title); // constructor de super clase
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
exports.Album = Album;
