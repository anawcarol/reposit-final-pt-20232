import mongoose from "mongoose";

import config from '../config/database.js';

class Database {
    constructor() {
        this.connection = mongoose.connect(
            config.url
        );
    }
}

export default new Database();