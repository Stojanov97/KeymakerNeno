const CreateFavour={
    name:"required|string",
    description:"required|string",
    category:"required|string",
    price:"required|decimal",
}

const UpdateFavour={
    name:"string",
    description:"string",
    category:"string",
    price:"decimal",
}

module.exports={
    CreateFavour,
    UpdateFavour
}