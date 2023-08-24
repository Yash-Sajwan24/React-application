export type SubDepartment = {
  id: number;
  name: string;
};

export type Department = {
  id: number;
  name: string;
  subDepartments: SubDepartment[];
};
