import React from 'react';

import { UserInfo } from '@components/index';
import { User } from '@declarations/index';

interface Props {
  users: Record<number, User>;
}

export function UsersInfo({ users }: Props) {
  const mappedUsers = Object.values(users);

  if (mappedUsers.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Phone number</th>
        </tr>
      </thead>

      <tbody>
        {mappedUsers.map((user) => (
          <UserInfo user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  );
}
