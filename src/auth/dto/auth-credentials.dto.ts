import { IsString, Matches, MaxLength, MinLength } from "class-validator";


export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
            message: 'Password must contain 1 Uppercase letter and 1 lowercase letter and atleast 1 number or special character'
        }
    )
    password: string
} 