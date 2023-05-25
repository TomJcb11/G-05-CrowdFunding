// Supprimer cette ligne car pg-mock n'existe pas.
// const { Client } = require('pg-mock');

// Client est maintenant un mock de la classe Client
const Client = jest.fn();

// Nous ajoutons une implémentation de la fonction query
Client.mockImplementation(() => {
    return {
        query: jest.fn(),
    };
});

// Votre importation de getAllUsers reste la même
const { getAllUsers } = require('./controllers_get');

describe('getAllUsers', () => {
    let mockClient;

    beforeEach(() => {
        // Créer une nouvelle instance mock du client avant chaque test
        mockClient = new Client();
    });

    test('returns all users', async() => {
        const users = [{ id: 1, name: 'Test User 1' }, { id: 2, name: 'Test User 2' }];

        // Nous utilisons notre mock de query ici
        mockClient.query.mockResolvedValueOnce({ rows: users });

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await getAllUsers(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(users);
    });

    test('handles errors', async() => {
        mockClient.query.mockRejectedValueOnce(new Error('Database error'));

        const req = {};
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        await getAllUsers(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Database error' });
    });

    // Ajout d'un nettoyage après chaque test
    afterEach(() => {
        jest.clearAllMocks();
    });
});