import { User, ApiResponse } from '@declarations/index';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const DEFAULT_API_ERROR_MESSAGE = 'Ошибка при обращении к API';
const DEFAULT_HTTP_ERROR_MESSAGE = 'Ошибка при обращении к HTTP';

export async function getUser(id: number): Promise<ApiResponse<User>> {
  try {
    const response = await fetch(`${API_URL}/${id}`);

    if (response.ok) {
      const data = (await response.json()) as User;

      return {
        ok: true,
        data,
      };
    }

    return {
      ok: false,
      code: response.status,
      message: response.statusText || DEFAULT_HTTP_ERROR_MESSAGE,
    };
  } catch (e: unknown) {
    const error = e as Error;

    return {
      ok: false,
      code: NaN,
      message: error.message || DEFAULT_API_ERROR_MESSAGE,
    };
  }
}
