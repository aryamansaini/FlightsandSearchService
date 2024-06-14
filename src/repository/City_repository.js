const { City } = require('../models/index');
const { Op } = require('sequelize');


class Cityrepository {

    async createCity({name})
    {
        try {
            const city = await City.create({name });
            return city;
        } catch (error) {
            console.log("there's an error in repository layer");
            throw(error);   
        }
    }
    
    async updateCity(cityId,data)
    {
        try {
            

            const city = await City.update(data,{ 
                where : {

                    id:cityId
                }

            });
            return city;
        } catch (error) {
            console.log("there's an error in repository layer");
            throw(error);   
        }
    }

    async deleteCity( cityId)
    {
        try {
            const city = await City.destroy({
                where : {
                        id:cityId 
                }    
            });
            
        } catch (error) {
            console.log("there's an error in repository layer");
            throw(error);   
        }
    }

    async getCity( cityId)
    {
        try {
            const city =await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("there's an error in repository layer");
            throw(error);   
        }
    }

    async getAllCities(filter) { // filter can be empty also
        try {
          if (filter.name) {
            const cities = await City.findAll({
              where: {
                name: {
                  [Op.startsWith]: filter.name
                }
              }
            });
            return cities;
          }
          const cities = await City.findAll();
          return cities;
        } catch (error) {
          console.log("Something went wrong in the repository layer");
          throw error;
        }
      }
      


}

module.exports=  Cityrepository;