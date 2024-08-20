import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class CreateRoleDto {
  @IsNotEmpty({
    message: 'Name không được để trống',
  })
  name: string;

  @IsNotEmpty({
    message: 'description không được để trống',
  })
  description: string;

  @IsNotEmpty({
    message: 'isActive không được để trống',
  })
  @IsBoolean({ message: 'isActive có định dạng là boolean' })
  isActive: boolean;

  @IsNotEmpty({
    message: 'permissions không được để trống',
  })
  @IsArray({ message: 'permissions có định dạng là array' })
  @IsString({ each: true, message: 'each permission là mongo object id' })
  permissions: mongoose.Schema.Types.ObjectId[];
}
