import { openDatabase, SQLiteDatabase } from "expo-sqlite";
import { JambSheet } from "../stores/jambSheet";

export type Autosave = {
  autosave_id: number;
  save_json: string;
  save_timestamp: number;
};

class NoAutoSavesError extends RangeError {}

export async function openJambDatabase(): Promise<SQLiteDatabase> {
  const db = openDatabase("db.db");
  await db.transactionAsync(async (tx) => {
    await tx.executeSqlAsync(
      "create table if not exists saves (save_id integer primary key autoincrement, save_json text, save_timestamp integer)"
    );
    await tx.executeSqlAsync(
      "create table if not exists autosaves (autosave_id integer primary key autoincrement, save_json text, save_timestamp integer)"
    );
  }, false);
  return db;
}

export async function getLatestAutosave(): Promise<Autosave> {
  const db = await openJambDatabase();
  let nesto: any = undefined;
  await db.transactionAsync(async (tx) => {
    const result = await tx.executeSqlAsync(
      "select * from autosaves order by save_timestamp desc limit 1"
    );
    nesto = result;
  });
  if (nesto?.rows.length === 0) throw NoAutoSavesError;
  return nesto.rows[0];
}

export async function autoSaveJambSheet(jambSheet: JambSheet) {
  const db = await openJambDatabase();
  db.transactionAsync(async (tx) => {
    const result = await tx.executeSqlAsync(
      "insert into autosaves (save_json, save_timestamp) values (?, unixepoch())",
      [jambSheet.toJSON()]
    );
  });
}
