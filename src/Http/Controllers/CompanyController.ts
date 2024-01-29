import { Request, Response } from "express";
import CompanyServices from "../../Services/CompanyServices";

async function index(request: Request, response: Response) {
    const companies = await CompanyServices.getAll();
    return response.json({ companies }).status(200);
}

async function edit(request: Request, response: Response) {
    const companyId = parseInt(request.params.companyId);
    const company = await CompanyServices.findByPk(companyId);
    return response.json({ company }).status(200);
}

async function update(request: Request, response: Response) {
    const companyId = parseInt(request.params.companyId);
    const body = request.body;

    const clientUpdated = await CompanyServices.updateByPk(companyId, body);

    return response.json({ clientUpdated }).status(201);
}

export default {
    index,
    edit,
    update
}