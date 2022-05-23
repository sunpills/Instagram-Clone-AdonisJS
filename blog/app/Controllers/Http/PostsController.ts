import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Application from "@ioc:Adonis/Core/Application";
import { schema } from "@ioc:Adonis/Core/Validator";
import Post from 'App/Models/Post';

export default class PostsController {
  public async index({}: HttpContextContract) {}

  public async create({ view }: HttpContextContract) {
      return view.render('posts/create')
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const req = await request.validate({
        schema: schema.create({
          caption: schema.string({}),
          image: schema.file({
              size: '2mb',
              extnames: ['jpg', 'png', 'jpeg', 'svg'],
          }),
        }),
        messages: {
          "caption.required": "Campo de descrição não pode ficar vazio",
          "image.required": "Selecione uma imagem",
        },
      });
          const imageName = new Date().getTime().toString() + `.${req.image.extname}`;
          await req.image.move(Application.publicPath('images'),{
            name: imageName
          }); 
          const post = new Post()
          post.image = `images/${imageName}`;
          post.caption = req.caption;
          if (auth.user != null ){
            post.userId = auth.user.id;
           post.save();
           return response.redirect(`/${auth.user.username}`);
          } else {
            return response.redirect('/login');
          }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}
  public async update({}: HttpContextContract) {}
  public async destroy({}: HttpContextContract) {}
}
