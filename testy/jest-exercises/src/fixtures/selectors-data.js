export const students = [
  {
    id: 1,
    name: 'Jacek',
    notes: [5, 3, 4, 2, 5, 5],
  },
  {
    id: 2,
    name: 'Ewa',
    notes: [2, 3, 3, 3, 2, 5],
  },
  {
    id: 3,
    name: 'Zygmunt',
    notes: [2, 2, 4, 4, 3, 3],
  },
];

export const groups = [
  {
    id: 1,
    name: 'JFDD-1',
    studentIds: [1, 2],
  },
  {
    id: 2,
    name: 'JFDD-2',
    studentIds: [1, 3],
  },
  {
    id: 3,
    name: 'JFDD-3',
    studentIds: [3],
  },
];

export const favoriteTracks = [
  {
    id: 1,
    studentId: 2,
    tracks: ['A', 'B', 'C'],
  },
  {
    id: 2,
    studentId: 1,
    tracks: ['A', 'B'],
  },
  {
    id: 3,
    studentId: 3,
    tracks: ['C'],
  },
];
