import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private registeredUser: User[] = [
    {
      id: 0,
      name: 'michael scot',
      address: 'health centre road',
      phone: 2255443332,
    },
    {
      id: 1,
      name: 'grace mike',
      address: 'health centre road',
      phone: 2255443332,
    },
    {
      id: 2,
      name: 'master ray',
      address: 'health centre road',
      phone: 2255443332,
    },
  ];

  findAllUsers(): User[] {
    return this.registeredUser;
  }

  findById(userId: number): User {
    return this.registeredUser.find((user) => user.id === userId);
  }

  createNewUser(createUserDto: CreateUserDto): User {
    const newUser = {
      id: Date.now(),
      ...createUserDto,
    };
    this.registeredUser.push(newUser);
    return newUser;
  }
}
