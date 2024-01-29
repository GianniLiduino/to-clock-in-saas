import { Router } from "express";
import CompanyController from "./Http/Controllers/CompanyController";

const routes = Router();

routes.get("/companies", CompanyController.index);
routes.get("/companies/:companyId", CompanyController.edit);
routes.put("/companies/:companyId/update", CompanyController.update);

routes.get('/', (request, response) => {
    return response.json({ message: "Page home" });
});

routes.get('/contact', (request, response) => {
    return response.json({ message: "Page contact" });
});

export default routes;