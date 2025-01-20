import { MongoClient } from "mongodb";
import 'dotenv/config'
import { connection } from "next/server";

const client = new MongoClient(process.env.MONGO_URI);

export default async function Home() {
  await connection();
  const visitCounts = await updateAndGetVisitCounts();
  return (
    <div className="h-screen flex items-center justify-center">
      Projects {visitCounts}
    </div>
  );
}


async function updateAndGetVisitCounts () {
  var visitCounts = 1000;
  try {
    await client.connect();
    const doc = await client.db("Portfolio").collection("visits").findOneAndUpdate(
        {name: "counts"},
        {$inc: {"value": 1}},
        {
          upsert: true,
          returnDocument: "after"
        }
    );
    visitCounts = doc.value;
    console.log("Visited");
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }

  return visitCounts;

}