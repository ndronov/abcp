import React, { memo } from 'react';

import { User } from '@declarations/index';

interface Props {
  user: User;
}

export const UserInfo = memo(({ user }: Props) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.phone}</td>
    </tr>
  );
});

UserInfo.displayName = 'UserInfo';
