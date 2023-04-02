let establishments = [] // Replace with DAO integration

export const getAllEstablishments = (request, response) => {
    response.send(establishments);
}

export const getEstablishmentByName = (request, response) => {
    const { name } = request.params;
    const foundEstablishment = establishments.find((establishment) => establishments.name == name);
    response.send(foundEstablishment);
};

export const getEstablishmentByCity = (request, response) => {
    const { city } = request.params;
    const foundEstablishment = establishments.find((establishment) => establishments.city == city);
    response.send(foundEstablishment);
};

export const getEstablishmentByType = (request, response) => {
    const { type } = request.params;
    const foundEstablishment = establishments.find((establishment) => establishments.type == type);
    response.send(foundEstablishment);
};

export const getEstablishmentBySeating = (request, response) => {
    const { seating } = request.params;
    const foundEstablishment = establishments.find((establishment) => establishments.seating == seating);
    response.send(foundEstablishment);
};

// TODO each of these methods needs to be tested