const {CityService} = require('../services/');

const cityservice= new CityService();

const create = async (req,res) =>{
    
    try{
        const city=await cityservice.createcity(req.body);
        return res.status(201).Json({
            data: city,
            success: true,
            message: "City created successfull",
            err:{}

        });
    } catch (error){
        console.log(error);
        return res.status(500).Json({
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
        const response = await cityService.deleteCity(req.params.id);
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
        const response = await cityService.getCity(req.params.id);
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
        const response = await cityService.updateCity(req.params.id);
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


module.exports ={
    create,
    destroy,
    get,
    update

}