import React, { Component } from "react";

interface Student {
  id: string;
  name: string;
  dob: string;
  email: string;
  status: "active" | "inactive";
}

interface StudentItemProps {
  index: number;
  student: Student;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onBlock: (id: string) => void;
}

export default class StudentItem extends Component<StudentItemProps> {
  render() {
    const { index, student, onEdit, onDelete, onBlock } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.dob}</td>
        <td>{student.email}</td>
        <td>
          {student.status === "active" ? (
            <span style={{ color: "green" }}>Đang hoạt động</span>
          ) : (
            <span style={{ color: "red" }}>Ngừng hoạt động</span>
          )}
        </td>
        <td>
          <button onClick={() => onBlock(student.id)}>Chặn</button>
          <button onClick={() => onEdit(student.id)}>Sửa</button>
          <button onClick={() => onDelete(student.id)}>Xóa</button>
        </td>
      </tr>
    );
  }
}
