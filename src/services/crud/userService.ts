import { Association, Op } from 'sequelize';

import { Users, sequelize } from "../../models";
import { CrudService } from "../crudService.pg";
import { ICrudOption } from "@/interfaces";
// import { Request, Response } from "express";

export class UserService extends CrudService<typeof Users>{
    constructor() {
        super(Users)
    }

    // async getInfoUserAndNumberofNote() {
    //     let result = await this.model.findAll({
    //         include: [
    //             {
    //                 association: "notes",
    //                 attributes: ["user_id"]
    //             }
    //         ],
    //         attributes: ["id", "first_name", "last_name", [sequelize.fn('COUNT', sequelize.col('user_id')), 'n_notes']],
    //         group: ["id", "user_id"],
    //         raw: true
    //     })
    //     return result
    // }
    async getInfoUserAndNumberofNote() {
        let result = await this.model.findAll({
            include: [
                {
                    association: "notes",
                    attributes: []
                }
            ],
            attributes: [
                [sequelize.literal('tbl_users.id'), 'id'],
                'first_name',
                'last_name',
                [sequelize.fn('COUNT', sequelize.col('notes.user_id')), 'n_notes']
            ],
            group: ["tbl_users.id", "first_name", "last_name"],
            raw: true
        });
        return result;
    }



}

