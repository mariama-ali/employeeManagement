import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  emailId: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
