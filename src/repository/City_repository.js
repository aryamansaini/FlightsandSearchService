const { city } = require('../models/index');

class Cityrepository {

    async createCity({ name})
    {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            throw(error);   
        }
    }

    async deleteCity({ cityId})
    {
        try {
            await City.destroy({
                where : {
                        Id:cityId 
                }    
            });
            
        } catch (error) {
            throw(error);   
        }
    }

}

module.exports=Cityrepository;