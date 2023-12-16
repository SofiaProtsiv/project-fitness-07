import { favoritesDB } from '.';

export const toggleFavoriteStatus = async function (exercise) {
  const { _id } = exercise;
  try {
    const isFavoriteValue = await favoritesDB.idIsFavorite(_id);

    if (isFavoriteValue) {
      // Видалити об'єкт зі списку улюблених
      const response = await favoritesDB.remove(_id);
      console.log(`Object with _id ${_id} removed from favorites.`);

      return false;
    } else {
      // Додати об'єкт на сервер та отримати відповідь

      const response = await favoritesDB.add(_id, exercise);
      console.log(`Object with _id ${_id} added to favorites.`);

      return response;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
