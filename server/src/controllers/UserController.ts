import { Request, Response } from 'express';
import { validateEmail, validatePassword } from '../helpers/utils';
import { UserDocument, UserModel } from '../models/User';
import bcrypt from 'bcrypt';

class UserController {
    static async getAllUsers(req: Request, res: Response) {
        try {
            const users = await UserModel.find();

            return res.send({
                body: users,
            });
        } catch (error) {
            res.status(500).json({ message: 'Internal Error' });
            console.log(error);
        }
    }

    static async getUserByEmail(req: Request, res: Response) {
        try {
            const { email } = req.params;

            const currentUser: UserDocument | null = await UserModel.findOne({
                email: email,
            });

            if (currentUser === null) {
                return res.send({
                    message: 'Такого пользователя не существует',
                });
            }

            return res.send({
                body: currentUser,
            });
        } catch (error) {
            res.status(500).json({ message: 'Internal Error' });
            console.log(error);
        }
    }

    static async createUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!validateEmail(email) || !validatePassword(password)) {
                return res
                    .status(400)
                    .json({
                        message:
                            'Ой, кажется Email не валидный или длина пароля меньше 8 символов',
                    });
            }

            const existingUser: UserDocument | null = await UserModel.findOne({
                email,
            });
            if (existingUser) {
                return res
                    .status(400)
                    .json({
                        message: 'Пользователь с таким email уже существует',
                    });
            }

            const hashedPassword: string = await bcrypt.hash(password, 10);

            const newUser = new UserModel({
                ...req.body,
                password: hashedPassword,
            });

            // saving the new user
            newUser.save();

            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal Error' });
            console.log(error);
        }
    }

    static async removeUserByEmail(req: Request, res: Response) {
        try {
            const { email } = req.params;

            const currentUser: UserDocument | null =
                await UserModel.findOneAndDelete({ email: email });

            if (currentUser === null) {
                return res.send({
                    message: 'Такого пользователя не существует',
                });
            }

            return res.send({
                message: 'Пользователь успешно удален',
            });
        } catch (error) {
            res.status(500).json({ message: 'Internal Error' });
            console.log(error);
        }
    }

    static async editUserByEmail(req: Request, res: Response) {
        try {
            const { email } = req.params;

            const currentUser: UserDocument | null =
                await UserModel.findOneAndUpdate(
                    { email: email }, // query parameter
                    {
                        ...req.body,
                        email: email,
                    }, // changing the data about user
                    { new: true } // return the new user entity
                );

            if (currentUser === null) {
                return res.send({
                    message: 'Такого пользователя не существует',
                });
            }

            return res.send({
                message: 'Данные пользователя успешно изменены',
                body: currentUser,
            });
        } catch (error) {
            res.status(500).json({ message: 'Internal Error' });
            console.log(error);
        }
    }

    static async editUserPasswordByEmail(req: Request, res: Response) {
        try {
            const { email } = req.params;
            const { newPassword } = req.body;

            if (!validatePassword(newPassword)) {
                return res
                    .status(400)
                    .json({
                        message:
                            'Ой, кажется Email не валидный или длина пароля меньше 8 символов',
                    });
            }

            const existUser: UserDocument | null = await UserModel.findOne({
                email: email,
            });

            if (existUser === null) {
                return res.send({
                    message: 'Такого пользователя не существует',
                });
            }

            const hashedNewPassword = await bcrypt.hash(newPassword, 10);

            await UserModel.findOneAndUpdate(
                { email: email },
                { password: hashedNewPassword }
            );

            return res.send({
                message: 'Пароль пользователя успешно изменен',
            });
        } catch (error) {
            res.status(500).json({ message: 'Internal Error' });
            console.log(error);
        }
    }
}

export default UserController;
