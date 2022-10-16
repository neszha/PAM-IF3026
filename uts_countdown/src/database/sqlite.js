import * as SQLite from 'expo-sqlite';

const dbName = 'countdown.db';
const db = SQLite.openDatabase({ name: dbName });

/** Initial tabel in DB. */
db.transaction(async (tx) => {
    // Create tabel "counter"
    await tx.executeSql('CREATE TABLE IF NOT EXISTS counter (id INTEGER PRIMARY KEY AUTO_INCREMENT, title TEXT, duration INTEGER)');
    setTimeout(async () => {
        console.log('query 1');
        await tx.executeSql('INSERT INTO counter (`id`, `title`, `duration`) VALUES (NULL, `Fanesa`, `12`);');
        console.log('query 2');
        // tx.executeSql('select * from counter;', [], (xx, { row }) => {
        //     console.log(row);
        // }, () => { console.log('error'); }, );
    }, 1000);
});

export default db;
