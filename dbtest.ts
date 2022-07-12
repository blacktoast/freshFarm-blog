import {
  Database,
  SQLite3Connector,
  Model,
} from 'https://deno.land/x/denodb/mod.ts';

const connector = new SQLite3Connector({
  filepath: './database.sqlite',
});

const db = new Database(connector);
class Business extends Model {
  static table = 'businesses';
}
db.link([Business]);
