import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('name');
      table.string('email').index();
      table.string('username', 25).index();
      table.string('avatar').nullable();
      table.string('details', 350).nullable();
      table.date('email_verified_at').nullable()
      table.string('password');
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
