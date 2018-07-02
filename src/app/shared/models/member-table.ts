import { UserName } from './name';
import { InviteStatus } from './status';

export interface MemberTableRow {
  avatar?: string;
  name: UserName;
  job?: string;
  status: InviteStatus;
}

export interface MemberTableFilter {
  names: string;
  members: number;
  labels: string;
}

export interface MemberTable {
  rows: MemberTableRow[];
  filter: MemberTableFilter;
}

export const MemberTableDummyData: MemberTable = {
  rows: [
    {
      name: {
        firstName: 'Julie',
        lastName: 'Goff'
      },
      job: 'Recuriting Manager',
      status: {
        added: new Date('2017-9-28'),
      }
    },
    {
      name: {
        firstName: 'Steve',
        lastName: 'Patterson'
      },
      job: 'structual Engineer',
      status: {
        added: new Date('2017-9-28'),
      }
    },
    {
      name: {
        firstName: 'Julie',
        lastName: 'Patterson'
      },
      job: 'Director',
      status: {
        added: new Date('2017-9-28'),
      }
    },
    {
      name: {
        firstName: 'Tom',
        lastName: 'Patterson'
      },
      job: 'Director',
      status: {
        added: new Date('2017-9-28'),
      }
    }
  ],
  filter: {
    names: '',
    members: 0,
    labels: ''
  }
};
