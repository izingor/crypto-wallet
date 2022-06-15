import express from 'express';
import cors from 'cors';
import path from 'path';
import session from 'express-session';
import server from 'http';
import { authRoutes } from './api/auth/auth.routes.js';

const app = express();
const http = server.createServer(app);



app.use(session);
app.use(express.json());
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
    // Express serve static files on production environment
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    // Configuring CORS
    const corsOptions = {
        // Make sure origin contains the url your frontend is running on
        origin: ['http://127.0.0.1:3030', 'http://localhost:3030'],
        credentials: true,
    };
    app.use(cors(corsOptions));
}

app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 3030;
http.listen(PORT, () => {
    console.log('server runnig on port 3030');
});