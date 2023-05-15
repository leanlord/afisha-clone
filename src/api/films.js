import instance from "@/api/http";

export const getAllFilms = () => {
  return instance.get("films");
};
