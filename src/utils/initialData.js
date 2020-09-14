const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      type: 'bug',
      title: 'Modals are not being displayed',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '2020-09-08',
    },
    'task-2': {
      id: 'task-2',
      type: 'feature',
      title: 'Implement FAQ screen',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '2020-09-08',
    },
    'task-3': {
      id: 'task-3',
      type: 'feature',
      title: 'Implement FAQ screen',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
      date: '2020-09-08',
    },
    'task-4': {
      id: 'task-4',
      type: 'story',
      title: 'Update user login page',
      content:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
      date: '2020-09-08',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'TO DO',
      taskIds: ['task-1', 'task-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'IN PROGRESS',
      taskIds: ['task-4'],
    },
    'column-3': {
      id: 'column-3',
      title: 'DONE',
      taskIds: ['task-2'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
  lastTaskIndex: 4,
};

export default initialData;
