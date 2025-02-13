const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // ✅ Correct Import

const User = sequelize.define("User", {  // ✅ Capitalized model name
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "user",
    },
});

module.exports = User; // ✅ Ensure this line is present
