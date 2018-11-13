const path = require("path");
module.exports = {
    entry: ["./src_fe/js/app.js"],
    output: {
        path: path.resolve(__dirname, "web"),
        filename: "js/script.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /src_fe/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};