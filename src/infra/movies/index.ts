import {setupAPIClient} from '../http';

export type HttpGetMovieNamesResponse = string[];

export const api = setupAPIClient();

export async function httpGetMoviesNames() {
  const {data} = await api.get<HttpGetMovieNamesResponse>(
    `/movies`,
  );

  return data;
}
