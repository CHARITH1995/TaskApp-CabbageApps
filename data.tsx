interface Task {
  id: number;
  name: string;
  type:string;
  startDate: string;
  is_checked: Boolean;
}

const TaskList: Task[] = [
  {
    id:2,
    name:"testing",
    type:"Important",
    startDate:'2010.03.4',
    is_checked:false
  },
  {
    id:3,
    name:"testing 2",
    type:"Important ",
    startDate:'2012.05.4',
    is_checked:false
  }
]

const CheckedTaskList: Task[] = [
  {
    id:1,
    name:"testing 1",
    type:"Planned ",
    startDate:'2015.07.8',
    is_checked:true
  }
];

export {Task , TaskList , CheckedTaskList};
