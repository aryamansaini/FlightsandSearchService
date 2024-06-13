const { city } = require('../models/index');

class Cityrepository {

    async createCity({ name})
    {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("there's an error in repository layer");
            throw(error);   
        }
    }
    
    async updateCity(cityId,data)
    {
        try {
            const city = await City.update({data, 
                Where : {

                    id:cityId
                }

            });
            return city;
        } catch (error) {
            console.log("there's an error in repository layer");
            throw(error);   
        }
    }

    async deleteCity({ cityId})
    {
        try {
            const city = await City.destroy({
                where : {
                        Id:cityId 
                }    
            });
            
        } catch (error) {
            console.log("there's an error in repository layer");
            throw(error);   
        }
    }

    async getCity({ cityId})
    {
        try {
            const city =await City.findbypk(cityId);
            return city;
        } catch (error) {
            console.log("there's an error in repository layer");
            throw(error);   
        }
    }


}

module.exports=Cityrepository;