import React, { useState } from 'react';

import { UsersInfo } from '@components/index';
import { User } from '@declarations/index';
import { getUser } from '@api/user';
import { getRandomInteger, memoize } from '@common/index';

const MIN_USER_ID = 1;
const MAX_USER_ID = 10;
const TOTAL_USERS_COUNT = MAX_USER_ID - MIN_USER_ID + 1;

const getUserMemoized = memoize(getUser);

export function App() {
  const [fetching, setIsFetching] = useState(false);
  const [users, setUsers] = useState<Record<number, User>>({});

  const gotAllUsers = Object.keys(users).length === TOTAL_USERS_COUNT;

  const receiveRandomUser = async () => {
    const randomId = getRandomInteger(MIN_USER_ID, MAX_USER_ID);

    setIsFetching(true);

    const response = await getUserMemoized(randomId);

    setIsFetching(false);

    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.warn(`Ошибка при запросе пользователя: код = ${response.code}, сообщение = "${response.message}"`);

      return;
    }

    const newUser = response.data;
    setUsers((currentUsers) => ({ ...currentUsers, [newUser.id]: newUser }));
  };

  return (
    <>
      <button
        disabled={gotAllUsers || fetching}
        onClick={receiveRandomUser}
        title={gotAllUsers ? 'Got all users' : ''}
        type="button"
      >
        get random user
      </button>

      <UsersInfo users={users} />
    </>
  );
}
