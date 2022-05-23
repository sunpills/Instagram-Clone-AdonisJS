import Route from "@ioc:Adonis/Core/Route";

// Rotas das páginas no geral

Route.get('/', 'HomeController.index');
Route.on("/login").render("auth/login").middleware('guest');
Route.on("/signup").render("auth/signup").middleware('guest');

// Auth de login
Route.post("/signup", "AuthController.signup");
Route.post("/login", "AuthController.login");
Route.post("/logout", "AuthController.logout");

// Rotas para o e-mail de ativação de conta (enviadas para o MailTrap.io)
Route.post("/verify-email", "EmailVerifiesController.index").middleware('auth');
Route.get("/verify-email/:email", "EmailVerifiesController.confirm").as('verifyEmail');

// Criar postagem
Route.get('/posts/create', 'PostsController.create').middleware('auth');
Route.post('/posts/create', 'PostsController.store').middleware('auth');

// Seguir/deixar de seguir algum perfil
Route.post('/follow/:userid', 'FollowsController.store').middleware('auth');
Route.delete('/follow/:userid', 'FollowsController.destroy').middleware('auth');

// Edição de dados do perfil logado
Route.get('/accounts/edit','ProfilesController.edit').middleware('auth');
Route.post('/accounts/edit','ProfilesController.update').middleware('auth');
Route.get("/:username",'ProfilesController.index').middleware('auth');