//M. Startsev

import { store, db } from '../firebase-service';

export const favoritesDB = {
  add: function (key, value) {
    return new Promise(resolve => {
      try {
        store.addData(key, value);
        resolve(true);
      } catch (error) {
        console.error(error);
        reject(false);
      }
    });
  },

  get: function () {
    return new Promise(async resolve => {
      try {
        const res = await store.getData();
        resolve(Object.values(res));
      } catch (error) {
        console.error(error);
        resolve([]);
      }
    });
  },

  idIsFavorite: async function (id) {
    try {
      const get = await this.get();

      return get.some(obj => obj._id === id);
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  getObjectById: async function (id) {
    try {
      const get = await this.get();
      const foundObject = get.find(obj => obj._id === id) || null;

      return foundObject ? { ...foundObject, isFavorite: true } : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  addAndGet: async function (key, value) {
    return new Promise(async resolve => {
      try {
        await store.addData(key, value);

        setTimeout(async () => {
          const res = await store.getData();
          resolve(Object.values(res));
        }, 200);
      } catch (error) {
        console.error(error);
        resolve([]);
      }
    });
  },

  remove: async function (key) {
    return new Promise(resolve => {
      try {
        store.removeData(key);
        resolve(true);
      } catch (error) {
        console.error(error);
        resolve(false);
      }
    });
  },
};
