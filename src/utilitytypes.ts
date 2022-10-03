import { BasicUser, Permission } from "./test";

type BasicUserReadOnly = Readonly<BasicUser>;
type BasicUserRequires = Required<BasicUser>;
type BasicUserPartial = Partial<BasicUser>;

type BasicUserReadOnlyRequired = Readonly<Required<BasicUser>>;

const user: BasicUserReadOnlyRequired = {
  name: "",
  surname: "",
  age: 0,
  isAdmin: false,
  permissions: [],
};

interface DepartmentsForPermissions {
  depName: string;
  lvl: number;
}

const depsForPerms: Record<Permission, DepartmentsForPermissions> = {
  admin: {
    depName: "security",
    lvl: 10,
  },
  user: {
    depName: "sales",
    lvl: 5,
  },
  manager: {
    depName: "sales",
    lvl: 10,
  },
};
