import React, { Component } from "react";
import StudentItem from "./StudentItem";

interface Student {
  id: string;
  name: string;
  dob: string;
  email: string;
  status: "active" | "inactive";
}

interface StudentTableProps {
  students: Student[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onBlock: (id: string) => void;
}

export default class StudentTable extends Component<StudentTableProps> {
  render() {
    const { students, onEdit, onDelete, onBlock } = this.props;

    return (
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, idx) => (
            <StudentItem
              key={s.id}
              index={idx}
              student={s}
              onEdit={onEdit}
              onDelete={onDelete}
              onBlock={onBlock}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
