import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { Employee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  dataSource!: MatTableDataSource<Employee, MatTableDataSourcePaginator>;
  displayedColumns: string[] = ['first', 'last', 'email', 'address', 'created', 'balance', 'actions'];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((data: Employee[]) => {
      this.dataSource = new MatTableDataSource<Employee>(data);
      console.log(this.dataSource);
    });
  }

  detailEmployee(employee: Employee) {
    console.log(employee);
  }

  editEmployee(employee: Employee) {
    console.log(employee);
  }
  
  deleteEmployee(employee: Employee) {
    console.log(employee);
  }

}