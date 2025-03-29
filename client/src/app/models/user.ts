export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    status: 'I' | 'A' | 'T';
    department: string;
  }
  
  export const USERS: User[] = [
    {
      id: 1,
      username: 'alice123',
      first_name: 'Alice',
      last_name: 'Johnson',
      email: 'alice@example.com',
      status: 'A',
      department: 'Engineering',
    },
    {
      id: 2,
      username: 'bob456',
      first_name: 'Bob',
      last_name: 'Smith',
      email: 'bob@example.com',
      status: 'I',
      department: 'Marketing',
    },
    {
      id: 3,
      username: 'charlie789',
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie@example.com',
      status: 'A',
      department: 'Sales',
    },
    {
      id: 4,
      username: 'diana321',
      first_name: 'Diana',
      last_name: 'Prince',
      email: 'diana@example.com',
      status: 'A',
      department: 'HR',
    },
    {
      id: 5,
      username: 'edgar999',
      first_name: 'Edgar',
      last_name: 'Wright',
      email: 'edgar@example.com',
      status: 'T',
      department: 'Finance',
    },
    {
      id: 6,
      username: 'fiona111',
      first_name: 'Fiona',
      last_name: 'Green',
      email: 'fiona@example.com',
      status: 'A',
      department: 'Engineering',
    },
    {
      id: 7,
      username: 'george222',
      first_name: 'George',
      last_name: 'Miller',
      email: 'george@example.com',
      status: 'I',
      department: 'Support',
    },
    {
      id: 8,
      username: 'hannah333',
      first_name: 'Hannah',
      last_name: 'Lee',
      email: 'hannah@example.com',
      status: 'A',
      department: 'Legal',
    },
    {
      id: 9,
      username: 'ivan555',
      first_name: 'Ivan',
      last_name: 'Rogers',
      email: 'ivan@example.com',
      status: 'A',
      department: 'IT',
    },
    {
      id: 10,
      username: 'julia777',
      first_name: 'Julia',
      last_name: 'Kim',
      email: 'julia@example.com',
      status: 'I',
      department: 'Operations',
    },
  ];
  