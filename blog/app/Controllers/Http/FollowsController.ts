import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Following from "../../Models/Following";

export default class FollowsController {
  public async store({ params, response, auth }: HttpContextContract) {
    const follow = new Following();
    if (auth.user != null) {
      follow.userId = auth.user.id;
      follow.followingId = params.userid;
      await follow.save();
      return response.redirect().back();
    }
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    if (auth.user != null) {
    const follow = Following.query()
      .where("user_id", auth.user.id)
      .where("following_id", params.userid);
      await follow.delete()
      return response.redirect().back();
    }
  }
}
