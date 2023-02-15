import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/all')
  getAllUsers(): User[] {
    return this.usersService.findAllUsers();
  }
  @Get(':id')
  getById(@Param('id') id: string): User {
    return this.usersService.findById(Number(id));
  }

  @ApiCreatedResponse({ type: User })
  @Post('/add')
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createNewUser(body);
  }
}
