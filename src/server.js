require("reflect-metadata");
const express = require("express");
const { AppDataSource } = require("./data-source");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Event Registration API is running...");
});

AppDataSource.initialize()
    .then(() => {
        console.log("MongoDB connected via TypeORM ✔");

        app.listen(process.env.PORT || 4000, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("DB Connection Error: ", err);
    });

