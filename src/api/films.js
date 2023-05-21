import instance from "@/api/http";

export const getAllFilms = () => instance.get("films");

export const getFilmById = (filmId) => instance.get(`films/${filmId}`);
