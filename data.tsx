interface Task {
  id: number;
  name: string;
  type:string;
  startDate: string;
  is_checked: Boolean;
}

const TaskList: Task[] = [];

const CheckedTaskList: Task[] = [];

export {Task , TaskList , CheckedTaskList};
