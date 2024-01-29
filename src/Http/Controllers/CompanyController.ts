import { Request, Response } from "express";
import Company from "../../Models/Company";

async function index(request: Request, response: Response) {
    const companies = await Company.findAll();
    return response.json({ companies }).status(200);
}

async function edit(request: Request, response: Response) {
    const { companyId } = request.params;
    const company = await Company.findByPk(companyId);
    return response.json({ company }).status(200);
}

async function update(request: Request, response: Response) {
    const companyId = parseInt(request.params.companyId);
    const body = request.body;

    const updatedCompany = await Company.update(body, {
        where: {
            id: companyId
        }
    });

    return response.json({ updatedCompany }).status(201);
}

export default {
    index,
    edit,
    update
}