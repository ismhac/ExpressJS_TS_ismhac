import { configViewEngine } from "./viewEngine.config";
import development from "./development";
import production from "./production";
require('dotenv').config()

let getConfig = (environment: string) => {
    if (environment === "development") {
        return development
    } else if (environment === "production") {
        return production
    } else {
        return development
    }
}

const config = getConfig(process.env.NODE_ENV as string)


export {
    config,
    configViewEngine
}