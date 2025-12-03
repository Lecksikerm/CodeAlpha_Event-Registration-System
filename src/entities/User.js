const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        _id: {
            primary: true,
            type: "objectid",
            generated: true
        },
        name: {
            type: "string"
        },
        email: {
            type: "string",
            unique: true
        },
        password: {
            type: "string"
        },
        isAdmin: {
            type: "boolean",
            default: false
        }
    }
});
