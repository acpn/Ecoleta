import knex from 'knex';

const connection = knex({
    client: 'pg',
    version: '12.3',
    connection: {
        host : '127.0.0.1',
        user : 'admin',
        password : 'admin123',
        database : 'turbobot'
    },
    useNullAsDefault: true,
});

export default connection;