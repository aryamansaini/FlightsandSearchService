const {CityService} = require('../services/index');
const cityservice= new CityService();

const create = async (req,res) =>{
    
    try{
        const city=await cityservice.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfull",
            err:{}

        });
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "can not create a city",
            err:error

        });
    }
}


// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityservice.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        });
    }
};

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityservice.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        });
    }
};

// Patch -> /city/:id => req.body
const update = async (req, res) => {
    try {

        const response = await cityservice.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }
};

const getAll = async (req, res) => {
    try {
      const cities = await cityservice.getAllCities(req.query);
      return res.status(200).json({
        data: cities,
        success: true,
        message: 'Successfully fetched all cities',
        err: {}
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: 'Not able to fetch the cities',
        err: error
      });
    }
  };
  


module.exports ={
    create,
    destroy,
    get,
    update,
    getAll

}