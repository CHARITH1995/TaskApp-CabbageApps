interface Task {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  date: string;
  is_checked: Boolean;
}

const TaskList: Task[] = [
  {
    id: 1,
    name: 'meeting 1',
    startTime: '2.34',
    endTime: ' 3.34',
    date: '2034.3.4',
    is_checked: false,
  },
  {
    id: 2,
    name: 'meeting 2',
    startTime: '2.34',
    endTime: ' 3.34',
    date: '2034.3.4',
    is_checked: false,
  },
  {
    id: 3,
    name: 'meeting 3',
    startTime: '2.34',
    endTime: ' 3.34',
    date: '2034.3.4',
    is_checked: false,
  },

];

const CheckedTaskList: Task[] = [];

export {Task , TaskList , CheckedTaskList};
