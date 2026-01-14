# Student Management System - Layered Architecture

## 📋 Project Information
- **Student Name:** [นางสาว สุพิชญา ชื่นจุม]
- **Student ID:** [67543210074-0]
- **Course:** ENGSE207 Software Architecture

## 🏗️ Architecture Style
- Layered Architecture (3-tier)
Presentation Layer → จัดการ API / HTTP requests (routes, controllers)

- Business Layer → Logic ของระบบ เช่น การตรวจสอบข้อมูล, คำนวณ GPA, กำหนดเงื่อนไขต่างๆ (services)

- Data Layer → การเข้าถึงฐานข้อมูล SQLite (models, database access)

## 📂 Project Structure
[อธิบายโครงสร้างโฟลเดอร์]
midterm-individual-67543210074-0/
│
├─ server.js                    # Entry point ของแอป
├─ package.json                 # Dependencies และสคริปต์ npm
├─ README.md                    # Documentation
│
│
├─ src/
│   ├─ presentation/
│   │   ├─ routes/
│   │   │   └─ studentRoutes.js        # จัดการเส้นทาง API
│   │   ├─ controllers/
│   │   │   └─ studentController.js   # รับ request → call business layer
│   │   └─ middlewares/
│   │       └─ errorHandler.js        # จัดการ error
│   │
│   ├─ business/
│   │   └─ services/
│   │       └─ studentService.js      # Logic ของระบบ
│   │
│   └─ data/
│       └─ studentModel.js            # Database access (SQLite queries)
│
└─ students.db                   # SQLite database (สร้างอัตโนมัติถ้าไม่มี)
- Presentation Layer: ส่วนที่ผู้ใช้/Client เข้าถึงโดยตรง เช่น Postman, Frontend

- Business Layer: ส่วน logic ของแอป แยกออกมาเพื่อไม่ให้โค้ดใน controller ปนกับ database หรือ validation เยอะเกินไป

- Data Layer: ส่วนที่ติดต่อฐานข้อมูล SQLite

## 🎯 Refactoring Summary

### ปัญหาของ Monolithic (เดิม):
- [ระบุปัญหา 3-5 ข้อ]
1.Controller ปนกับ Database query ทำให้แก้ไขหรือบำรุงรักษายาก

2.ไม่มีการแยก Layer ของ Business Logic → Validation, Calculation ปนกับ HTTP handling

3.การจัดการ Error ไม่เป็นระบบ ทำให้ debug ยาก
### วิธีแก้ไขด้วย Layered Architecture:
- [อธิบายวิธีแก้แต่ละปัญหา]
1.Presentation Layer แยก routes และ controllers สำหรับรับ request / response

2.Business Layer แยก logic เช่น validation, GPA calculation, status change rules

3.Data Layer แยกการเข้าถึงฐานข้อมูล SQLite ผ่าน models / service

### ประโยชน์ที่ได้รับ:
- [ระบุประโยชน์ 3-5 ข้อ]
1.โค้ดอ่านง่ายและบำรุงรักษาง่ายขึ้น

2.เพิ่ม feature ใหม่หรือแก้ไข logic ไม่กระทบ layer อื่น

3.ลดความซ้ำซ้อนของโค้ดและจัดการ Error แบบรวมศูนย์

4.สามารถทดสอบแต่ละ layer ได้แยกกัน (Unit Testing)
## 🚀 How to Run
\`\`\`bash
# 1. Clone repository
git clone [your-repo-url]

# 2. Install dependencies
npm install

# 3. Run server
npm start

# 4. Test API
# Open browser: http://localhost:3000
\`\`\`

## 📝 API Endpoints
[ระบุ API endpoints ทั้งหมด]
GET http://localhost:3000/api/students
GET http://localhost:3000/api/students/1
POST http://localhost:3000/api/students
PUT  http://localhost:3000/api/students/1
PATCH  http://localhost:3000/api/students/1/gpa
PATCH  http://localhost:3000/api/students/1/status
DELETE  http://localhost:3000/api/students/1 