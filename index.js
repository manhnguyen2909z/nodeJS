const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;
const routes = require('./src/routes');
const db = require('./src/config/db');
const methodOverride = require('method-override');

//connect db
db.connect();
// middle ware
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json()); // đọc từ file js thì cần cái này

app.use(methodOverride('_method')); // cái này để chuyển phương thức post thành put

// dẫn đến ảnh
app.use(express.static(path.join(__dirname, 'src', 'public')));

//template engine

app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs', // thay doi cai nay thi phai thay doi ca cho khac (chuyen tu handlebars sang hbs cho ngan)
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
); // khoi tao handle

app.set('view engine', 'hbs'); // su dung handle bar

app.set('views', path.join(__dirname, 'src', 'resource', 'views')); // do thay doi cau truc

console.log(__dirname);

// cau hinh o routes/index
routes(app);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
