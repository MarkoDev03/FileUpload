import { Constants } from "../../common/constants"
import { NotFound } from "../../errors/server-errors"

export const notFoundHandler = () => {
   throw new NotFound(Constants.NotFound);
}