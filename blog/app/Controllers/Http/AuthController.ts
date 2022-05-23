import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import User from "App/Models/User";

export default class AuthController {
  public async signup({ request, response }: HttpContextContract) {
    const req = await request.validate({
      schema: schema.create({
        name: schema.string(),
        email: schema.string({}, [rules.email()]),
        password: schema.string({}),
        username: schema.string({}),
      }),
      messages: {
        "name.required": "É preciso inserir o nome",
        "email.required": "É preciso inserir o e-mail",
        "password.required": "É preciso inserir a senha",
        "username.required": "É preciso inserir o nome de usuário",
      },
    });

    const user = new User();
    user.name = req.name;
    user.email = req.email;
    user.password = req.password;
    user.username = req.username;
    await user.save();

    //Mandar e-mail de verificação

    user?.sendVerificationEmail()

    return response.redirect("/");
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const req = await request.validate({
      schema: schema.create({
        email: schema.string({}, [rules.email()]),
        password: schema.string({}, [rules.minLength(8)]),
      }),
      messages: {
        "email.required": "Insira o seu E-mail",
        "password.required": "Insira a sua senha",
        "password.minLength": "A senha precisa ter até 8 caracteres",
      },
    });

    const email = req.email
    const password = req.password
    const user = await auth.attempt(email, password)

    return response.redirect(`/${user.username}`)
  }

  public async logout({ auth, response }: HttpContextContract ) {
    await auth.logout()
    return response.redirect('/')
  }
}
