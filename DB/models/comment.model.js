import { DataTypes } from "sequelize";
import { sequelize } from "../connectionDB.js";
import userModel from './user.model.js';
import postModel from './post.model.js';


const commentModel = sequelize.define('comment', {
    content:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

commentModel.belongsTo(postModel,{ through:"userModel"},
    {onDelete:"CASCADE",onUpdate:"CASCADE"}
)
postModel.hasMany(commentModel)
userModel.hasMany(commentModel)

export default commentModel