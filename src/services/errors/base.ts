import { IBaseErrorOption } from "../../interfaces";


export class BaseError extends Error {
    public options: IBaseErrorOption
    constructor(options: IBaseErrorOption) {
        super()
        if (!options.message) {
            options.message = options.type
        }
        this.options = options
    }

    toJSON() {
        return this.options
    }
}