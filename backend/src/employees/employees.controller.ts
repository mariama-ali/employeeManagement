import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './interfaces/employee.interfaces';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<Employee> {
    return this.employeesService.findOne(id);
  }
  @Post()
  create(@Body() emp: Employee): Promise<Employee> {
    return this.employeesService.create(emp);
  }
  @Delete(':id')
  delete(@Param('id') id): Promise<Employee> {
    return this.employeesService.delete(id);
  }

  @Put(':id')
  update(@Body() updateItemDto: Employee, @Param('id') id): Promise<Employee> {
    return this.employeesService.update(id, updateItemDto);
  }
}
