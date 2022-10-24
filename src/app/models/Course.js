const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        desciption: { type: String, maxLength: 600 },
        img: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true }, // cái slug này sẽ luôn lấy theo name (không giấu) unique là nó thêm fix để tránh trùng id nhau
        videoId: { type: String, maxLength: 255 },
        level: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
