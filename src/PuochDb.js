import PouchDb from "pouchdb";

export const db = new PouchDb("mypouchdb");

db.info().then((info) => {
  // eslint-disable-next-line no-console
  console.log("Show me ", info);
});

export async function insertToDB(data) {
  try {
    const response = await db.post(data);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
  return null;
}

export async function getToDB() {
  try {
    const response = await db.allDocs({ include_docs: true, descending: true })
    return response
    
  } catch (error) {
    console.error(error)
  }
}

export async function removeToDB(id){
  try {
    const doc = await db.get(id);
    db.remove(doc);
  } catch (error) {
    console.log(error)
  }
  }


