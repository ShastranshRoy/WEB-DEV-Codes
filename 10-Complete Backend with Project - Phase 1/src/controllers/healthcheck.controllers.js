import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";


/*


// try-catch is one way to handle request and response but the efficient way is to handle it with Promise so that we don't have to write catch again and again.


const healthCheck = async (req, res, next) => {
    try {
        const user = await getUserFromDB()     // This is future request task which requires async await thing
        res
            .status(200)
            .json(new ApiResponse(200, { message: "Server is running"}));

    } catch (error) {
        next(err)
    }
};

*/


const healthCheck = asyncHandler(async (req, res) => {
    res
        .status(200)
        .json(new ApiResponse(200, {message: "Server is running"}));
});

export { healthCheck };