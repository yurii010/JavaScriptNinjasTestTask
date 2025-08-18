export interface Superhero {
  id: number;
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  image: string;
}

export interface SuperheroPayload {
    id?: number;
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: string;
    catch_phrase: string;
    image: string;
}

export type ParamsId = {
  id: string;
};
