import path from 'path';

module.exports = { 
    client: 'pg',
    version: '12.3',
    connection: {
        host : '127.0.0.1',
        user : 'admin',
        password : 'admin123',
        database : 'turbobot'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};