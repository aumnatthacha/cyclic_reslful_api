const { DataType, DataTypes } = require("sequelize");
const sequelize = require("./db");
//Define the restaurant model
const Restaurant = sequelize.define("re", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
});

// คำสั่งการสร้างตารางเมื่อไม่มีตารางนั้นจะสร้างขึ้นมาให้ 
Restaurant.sync({ force: true }).then(() => {
    console.log("Table created or already exists");
})
    .catch((error) => {
        console.error("error creating table:", error);
    });

module.exports = Restaurant;
