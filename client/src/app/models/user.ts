export interface User {
    user_id: number;
    user_name: string;
    first_name: string;
    last_name: string;
    email: string;
    user_status: 'I' | 'A' | 'T';
    department: string;
  }
  
  export const USERS: User[] = [
    {
      user_id: 1,
      user_name: 'alice123',
      first_name: 'Alice',
      last_name: 'Johnson',
      email: 'alice@example.com',
      user_status: 'A',
      department: 'Engineering',
    },
    {
      user_id: 2,
      user_name: 'bob456',
      first_name: 'Bob',
      last_name: 'Smith',
      email: 'bob@example.com',
      user_status: 'I',
      department: 'Marketing',
    },
    {
      user_id: 3,
      user_name: 'charlie789',
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie@example.com',
      user_status: 'A',
      department: 'Sales',
    },
    {
      user_id: 4,
      user_name: 'diana321',
      first_name: 'Diana',
      last_name: 'Prince',
      email: 'diana@example.com',
      user_status: 'A',
      department: 'HR',
    },
    {
      user_id: 5,
      user_name: 'edgar999',
      first_name: 'Edgar',
      last_name: 'Wright',
      email: 'edgar@example.com',
      user_status: 'T',
      department: 'Finance',
    },
    {
      user_id: 6,
      user_name: 'fiona111',
      first_name: 'Fiona',
      last_name: 'Green',
      email: 'fiona@example.com',
      user_status: 'A',
      department: 'Engineering',
    },
    {
      user_id: 7,
      user_name: 'george222',
      first_name: 'George',
      last_name: 'Miller',
      email: 'george@example.com',
      user_status: 'I',
      department: 'Support',
    },
    {
      user_id: 8,
      user_name: 'hannah333',
      first_name: 'Hannah',
      last_name: 'Lee',
      email: 'hannah@example.com',
      user_status: 'A',
      department: 'Legal',
    },
    {
      user_id: 9,
      user_name: 'ivan555',
      first_name: 'Ivan',
      last_name: 'Rogers',
      email: 'ivan@example.com',
      user_status: 'A',
      department: 'IT',
    },
    {
      user_id: 10,
      user_name: 'julia777',
      first_name: 'Julia',
      last_name: 'Kim',
      email: 'julia@example.com',
      user_status: 'I',
      department: 'Operations',
    },
  ];
  