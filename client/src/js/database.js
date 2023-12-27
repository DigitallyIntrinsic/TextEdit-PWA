import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const putDb = async (content) => {
    console.log("Update the database");
  
    // Creates a connection to the database and version we want to use
    const textDb = await openDB("jate", 1);
  
    // Creates a new transaction and specify the database and data privileges
    const tx = textDb.transaction("jate", "readwrite");

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
