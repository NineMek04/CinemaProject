import { dataSource } from "../../../core/interfaces/dataSourceInfo.interfaces";

export const accountData: dataSource[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' ,class:"PREMIUM MEMBER" ,phone:"+66 81-234-5678"},
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' ,class:"STANDART MEMBER",phone:"+66 81-234-5678"},
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive' ,class:"STANDART MEMBER",phone:"+66 81-234-5678"},
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active' ,class:"STANDART MEMBER",phone:"+66 81-234-5678"},
    { id: 5, name: 'Charlie Green', email: 'charlie@example.com', role: 'User', status: 'Pending' ,class:"PREMIUM MEMBER",phone:"+66 81-234-5678"},
];