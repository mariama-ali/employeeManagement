import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './interfaces/employee.interfaces';
import { Model } from 'mongoose';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('Employee') private readonly empModel: Model<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return await this.empModel.find();
  }
  async findOne(id): Promise<Employee> {
    return await this.empModel.findById(id);
  }
  async create(emp: Employee): Promise<Employee> {
    const newEmp = new this.empModel(emp);
    return await newEmp.save();
  }
  async delete(id: string): Promise<Employee> {
    return await this.empModel.findByIdAndRemove(id);
  }

  async update(id: string, emp: Employee): Promise<Employee> {
    return await this.empModel.findByIdAndUpdate(id, emp, { new: true });
  }
}
