const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("giverr", "postgres", "root", {
    host: "localhost",
    dialect: "postgresql"
});

const Users = sequelize.define("Users", {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.TEXT,
        unique: true
    },
    password: {
        type: DataTypes.TEXT
    },
    profile_picture: {
        type: DataTypes.BLOB
    },
    firstname: {
        type: DataTypes.TEXT
    },
    lastname: {
        type: DataTypes.TEXT
    },
    phone_number: {
        type: DataTypes.TEXT,
        unique: true
    },
    birthdate: {
        type: DataTypes.DATE
    },
    addres: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT,
        unique: true
    },
    warning: {
        type: DataTypes.INTEGER
    }
});

const Projects = sequelize.define("Projects", {
    id_project: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_project: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    owner_project: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: "id_user"
        }
    },
    description_project: {
        type: DataTypes.TEXT
    },
    status_project: {
        type: DataTypes.INTEGER
    },
    goal_money: {
        type: DataTypes.NUMERIC
    },
    collected_money: {
        type: DataTypes.NUMERIC
    },
    project_picture: {
        type: DataTypes.TEXT
    },
    limit_date: {
        type: DataTypes.DATE
    }
});

Users.hasMany(Projects, { foreignKey: "owner_project" });
Projects.belongsTo(Users, { foreignKey: "owner_project" });

// Synchroniser les modèles avec la base de données
sequelize.sync({ force: false })
    .then(() => {
        console.log("Les modèles ont été synchronisés avec la base de données.");
    })
    .catch((error) => {
        console.error("Une erreur s'est produite lors de la synchronisation des modèles :", error);
    });

// Exporter les modèles
module.exports = {
    Users,
    Projects
};