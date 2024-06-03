import { Sequelize } from "sequelize";

export const sequelize= new Sequelize("mysql://u21y65zegvc4qsdl:czVJUyAdFAwOHgbSHvv7@bqgzf1zrrkueorxedtzo-mysql.services.clever-cloud.com:3306/bqgzf1zrrkueorxedtzo")

const connection = async() => {
    return await sequelize.sync({alter:false}).then(() =>{
        console.log("connection DB initialized successfully")
    }).catch({msg:"connection DB failed"})
}

export default connection