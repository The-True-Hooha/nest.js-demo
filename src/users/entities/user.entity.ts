/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class User {
    @ApiProperty({required: true})
    id: number;

    @ApiProperty({required: true})
    name: string;

    @ApiProperty({required: true})
    address: string;

    @ApiProperty({required: true})
    phone: number;
}
