"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudService = void 0;
const services_1 = require("../services");
const errors_1 = require("../services/errors");
const config_1 = require("../config");
const models_1 = require("../models");
class CrudService {
    constructor(model) {
        this.model = model;
    }
    transaction() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.sequelize.transaction();
        });
    }
    exec(promise, option = { allowNull: true }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield promise;
                if ((result === undefined || result === null) && !option.allowNull)
                    throw services_1.errorService.database.customError('Result not found', 404);
                return result;
            }
            catch (error) {
                console.log('ERROR ==> ', error.message);
                if (error instanceof errors_1.BaseError)
                    throw services_1.errorService.database.customError(error.options.message, error.options.code);
                if (config_1.config.server.debug) {
                    if (error.errors && error.errors[0]) {
                        throw services_1.errorService.database.customError(error.message, 404);
                    }
                    else {
                        throw services_1.errorService.database.customError(error.message, 404);
                    }
                }
                else {
                    throw services_1.errorService.database.customError(error.message, 404);
                }
            }
        });
    }
    getList(option = {
        limit: config_1.config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope'],
        distinct: true,
        where: {},
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.exec(this.modelWithScope(option.scope).findAndCountAll(option));
        });
    }
    getItem(option = { scope: ['defaultScope'], where: {} }, allowNull = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.exec(this.modelWithScope(option.scope).findOne(option), { allowNull: allowNull });
        });
    }
    count(option = { scope: ['defaultScope'], where: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.exec(this.modelWithScope(option.scope).count(option));
        });
    }
    create(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.exec(this.model.create(params, this.applyCreateOptions(option)));
        });
    }
    update(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.exec(this.model.findByPk(option.where.id), { allowNull: false });
            yield this.exec(item.update(params));
            return yield this.getItem(option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.exec(this.model.destroy(option), { allowNull: false });
        });
    }
    deleteAll(option) {
        return __awaiter(this, void 0, void 0, function* () {
            const t = yield this.transaction();
            option.transaction = t;
            try {
                const result = yield this.exec(this.model.destroy(this.applyDestroyOptions(option)));
                yield t.commit();
                return result;
            }
            catch (err) {
                yield t.rollback();
                throw err;
            }
        });
    }
    applyCreateOptions(option) {
        const query = {
            transaction: option.transaction,
        };
        return query;
    }
    applyDestroyOptions(option) {
        const query = {
            where: option.where,
            limit: option.limit,
            transaction: option.transaction,
        };
        return query;
    }
    modelWithScope(scope) {
        try {
            return this.model.scope(scope);
        }
        catch (err) {
            throw services_1.errorService.database.invalidScope(err.message);
        }
    }
}
exports.CrudService = CrudService;
//# sourceMappingURL=crudService.pg.js.map