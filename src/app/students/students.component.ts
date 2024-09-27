import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  constructor(public authService: UsersService) { }
  view = true;
  option = 'grid';

  students = [
    { name: 'Ali Ahmed', age: 22, gender: 'male', grade: 45 },
    { name: 'Sara sayed', age: 20, gender: 'female', grade: 60 },
    { name: 'Yehya Ahmed', age: 22, gender: 'male', grade: 80 },
    { name: 'Alaa sayed', age: 20, gender: 'female', grade: 90 },
    { name: 'Sara sayed', age: 20, gender: 'female', grade: 60 },
    { name: 'Ali Ahmed', age: 22, gender: 'male', grade: 30 },
    { name: 'Wafaa sayed', age: 20, gender: 'female', grade: 75 },
    { name: 'Ali Mohamed', age: 22, gender: 'male', grade: 15 },
    { name: 'Sara Mohamed', age: 20, gender: 'female', grade: 70 },
    { name: 'Sara sayed', age: 20, gender: 'female', grade: 60 },
    { name: 'Ahmed Mohsen', age: 24, gender: 'male', grade: 95 }
  ];

  toggle() {
    this.view = !this.view;
    if (this.option === 'grid') {
      this.option = 'table';
    } else {
      this.option = 'grid';
    }
  }





  //edit section
  editedStudent = { name: '', age: 0, gender: '', grade: 0 };
  editIndex: number | null = null;

  onEditStudent(index: number) {
    this.editIndex = index;
    this.editedStudent = { ...this.students[index] };
  }

  onUpdateStudent() {
    if (this.editIndex !== null) {
      this.students[this.editIndex] = { ...this.editedStudent };
      this.editIndex = null;
    }
  }


  //Delete Section
  confirmDelete(index: number) {
    const confirmation = confirm("Are you sure you want to delete this student?");
    if (confirmation) {
      this.students.splice(index, 1);
    }
  }

}
