import { authService } from './auth.service.js';


export async function login(req, res) {
    const { email, password } = req.body;
    const userData = await authService.login(email, password);
    console.log('printing res from the controller', res);
}

