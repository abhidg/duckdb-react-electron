// Backend API
// Any native code should be here, e.g. calling databases or reading from the filesystem

import { Database, TableData } from "duckdb-async";

type SQLResult = null | string | bigint | number | TableData;

export async function runSQL(sqlQuery: string): Promise<SQLResult> {
  try {
    const db = await Database.create('mtcars.db');
    const tables = (await (db.all('SHOW TABLES')).then((xs) => xs.map((x) => x.name))) as string[];
    if (!tables.includes('mtcars'))
        await db.all('CREATE TABLE mtcars AS FROM read_csv("src/mtcars.csv")');
    const results = await db.all(sqlQuery);
    if (results.length === 1 && Object.keys(results[0]).length === 1) {
      return Object.values(results[0])[0];
    }
    return results;
  } catch {
    return null;
  }
}

export type API = {
  runSQL: (query: string) => Promise<SQLResult>;
};
