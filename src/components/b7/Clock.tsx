import React, { Component } from 'react'
interface StateType {
    time: Date;
}
export default class Clock extends Component<object, StateType> {
    private timeId?: NodeJS.Timeout;
    constructor(props: object){
        super(props);
        this.state = {
            time: new Date(),
        }
    }
    componentDidMount(): void {
        this.timeId = setInterval(() => {
            this.setState({time: new Date()});
        });
    }
    componentWillUnmount(): void {
        if(this.timeId){
            clearInterval(this.timeId);
        }
    }
  render() {
    const {time} = this.state;
    return (
      <div>
        <h2>Thời gian hiện tại: {" "}
        {time.getHours().toString().padStart(2, "0")}: {" "}
        {time.getMinutes().toString().padStart(2, "0")} :{" "}
         {time.getSeconds().toString().padStart(2, "0")}
        </h2>
      </div>
    )
  }
}
// import React, { Component } from 'react'  
// // Import React và Component để tạo Class Component

// interface StateType {  
//     time: Date;  
// }  
// // Khai báo kiểu dữ liệu cho state: state có một thuộc tính "time" kiểu Date

// export default class Clock extends Component<object, StateType> {  
// // Tạo class Clock kế thừa từ Component
// // Tham số generics: props có kiểu object (không dùng props), state có kiểu StateType

//     private timeId?: NodeJS.Timeout;  
//     // Khai báo biến timeId để lưu ID của interval (setInterval trả về)

//     constructor(props: object){  
//         super(props);  
//         // Gọi constructor của lớp cha (Component)
//         this.state = {  
//             time: new Date(),  
//             // Khởi tạo state ban đầu với thời gian hiện tại
//         }  
//     }  

//     componentDidMount(): void {  
//         // Lifecycle method: chạy sau khi component được render lần đầu
//         this.timeId = setInterval(() => {  
//             this.setState({time: new Date()});  
//             // Cứ mỗi 1000ms (1 giây), cập nhật state "time" thành thời gian mới
//         }, 1000);  
//     }  

//     componentWillUnmount(): void {  
//         // Lifecycle method: chạy ngay trước khi component bị gỡ khỏi DOM
//         if(this.timeId){  
//             clearInterval(this.timeId);  
//             // Xóa interval để tránh rò rỉ bộ nhớ
//         }  
//     }  

//     render() {  
//         // Hàm render: trả về giao diện JSX
//         const {time} = this.state;  
//         // Lấy time từ state để dễ sử dụng trong JSX
//         return (  
//             <div>  
//                 <h2>Thời gian hiện tại: {" "}  
//                 {time.getHours().toString().padStart(2, "0")}: {" "}  
//                 // Lấy giờ, chuyển thành chuỗi, thêm số 0 ở trước nếu < 10

//                 {time.getMinutes().toString().padStart(2, "0")} :{" "}  
//                 // Lấy phút, chuyển thành chuỗi, thêm số 0 ở trước nếu < 10

//                 {time.getSeconds().toString().padStart(2, "0")}  
//                 // Lấy giây, chuyển thành chuỗi, thêm số 0 ở trước nếu < 10
//                 </h2>  
//             </div>  
//         )  
//     }  
// }

