import { favoritesDB } from '.';

export const toggleFavoriteStatus = async function (exercise) {
  const { _id } = exercise;
  try {
    const isFavoriteValue = await favoritesDB.idIsFavorite(_id);

    if (isFavoriteValue) {
      // Видалити об'єкт зі списку улюблених
      const response = await favoritesDB.remove(_id);
      console.log(`Object with _id ${_id} removed from favorites.`);
      localStorage.setItem('isDataOld', JSON.stringify(true));
      return false;
    } else {
      // Додати об'єкт на сервер та отримати відповідь
      localStorage.setItem('isDataOld', JSON.stringify(true));
      const response = await favoritesDB.add(_id, exercise);
      console.log(`Object with _id ${_id} added to favorites.`);

      return response;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
