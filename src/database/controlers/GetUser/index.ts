import { mockedApiData } from '@/database/modals/user';

export const GetUser = (token: string | null) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      if (!token) resolve(null);
      if (token === 'JWTTOKEN') resolve(mockedApiData);
      else reject(new Error('Token expirado'));
    }, 1000);
  });
};
