import SQLite from "expo-sqlite";

async function openDatabase(): Promise<SQLite.SQLiteDatabase> {
  return SQLite.openDatabase("myDatabaseName.db");
}
