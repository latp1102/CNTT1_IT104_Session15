import React, { Component, ChangeEvent } from "react";
import StudentTable from "./StudentTable";

interface Student {
  id: string;
  name: string;
  dob: string;
  email: string;
  status: "active" | "inactive";
}

interface State {
  students: Student[];
  search: string;
  sortType: string;
  currentPage: number;
  pageSize: number;
  newStudent: {
    id: string;
    name: string;
    dob: string;
    email: string;
  };
}

export default class StudentManagement extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      students: [
        {
          id: "SV001",
          name: "Nguyễn Văn A",
          dob: "21/12/2003",
          email: "nva@gmail.com",
          status: "active",
        },
        {
          id: "SV002",
          name: "Nguyễn Thị B",
          dob: "21/11/2002",
          email: "ntb@gmail.com",
          status: "inactive",
        },
        {
          id: "SV003",
          name: "Trần Văn C",
          dob: "10/10/2004",
          email: "tvc@gmail.com",
          status: "active",
        },
      ],
      search: "",
      sortType: "",
      currentPage: 1,
      pageSize: 2,
      newStudent: { id: "", name: "", dob: "", email: "" },
    };
  }
  handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value, currentPage: 1 });
  };

  handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ sortType: e.target.value });
  };

  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
  };
  
  handleAddStudent = () => {
    const { id, name, dob, email } = this.state.newStudent;
    if (!id || !name || !dob || !email) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    this.setState((prevState) => ({
      students: [
        ...prevState.students,
        { ...prevState.newStudent, status: "active" },
      ],
      newStudent: { id: "", name: "", dob: "", email: "" },
    }));
  };

  render() {
    const { students, search, sortType, currentPage, pageSize } = this.state;

    let filtered = students.filter(
      (s) =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase())
    );
    const totalPages = Math.ceil(filtered.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const paginated = filtered.slice(startIndex, startIndex + pageSize);

    return (
      <div>
        <h2>Quản lý sinh viên</h2>
        <div style={{ marginBottom: "15px" }}>
          <h4>Thêm mới sinh viên</h4>
          <button onClick={this.handleAddStudent}>Thêm</button>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <select onChange={this.handleSort} value={sortType}>
            <option value="">Sắp xếp theo tuổi</option>
            <option value="asc">Tuổi tăng dần</option>
            <option value="desc">Tuổi giảm dần</option>
          </select>
          <input
            type="text"
            placeholder="Tìm kiếm theo tên hoặc email"
            value={search}
            onChange={this.handleSearch}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <StudentTable
          students={paginated}
        />
        <div style={{ marginTop: "10px" }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => this.handlePageChange(i + 1)}>
            </button>
          ))}
        </div>
      </div>
    );
  }
}
