import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "../models/eventModel.js";
import AdminEmail from "../models/adminEmailsModel.js";

dotenv.config();

const adminEmails = [
  {
    email: "housearena.sam@gmail.com",
  },
];

const events = [
  {
    _id: {
      $oid: "66ad48d868cacd2e573a2f33",
    },
    name: "Time Capsule",
    date: null,
    housePoints: {
      kong: 1,
      leo: 5,
      phoenix: 2,
      tusker: 3,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66ad497068cacd2e573a2f37",
    },
    name: "Relays(Boys)",
    date: {
      $date: "2024-02-27T00:00:00.000Z",
    },
    housePoints: {
      kong: 3,
      leo: 0,
      phoenix: 5,
      tusker: 2,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66ad49a368cacd2e573a2f39",
    },
    name: "Relays(Girls)",
    date: {
      $date: "2024-02-27T00:00:00.000Z",
    },
    housePoints: {
      kong: 2,
      leo: 5,
      phoenix: 0,
      tusker: 3,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66ad49be68cacd2e573a2f3b",
    },
    name: "Jenga",
    date: {
      $date: "2024-02-27T00:00:00.000Z",
    },
    housePoints: {
      kong: 5,
      leo: 1,
      phoenix: 3,
      tusker: 2,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66ad49e568cacd2e573a2f3d",
    },
    name: "Pitthu",
    date: null,
    housePoints: {
      kong: 3,
      leo: 1,
      phoenix: 5,
      tusker: 2,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66ad4a2f68cacd2e573a2f3f",
    },
    name: "Inpromptu Rapid Fire",
    date: {
      $date: "2024-02-29T00:00:00.000Z",
    },
    housePoints: {
      kong: 2,
      leo: 5,
      phoenix: 3,
      tusker: 1,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66ad4a5c68cacd2e573a2f41",
    },
    name: "Chess",
    date: {
      $date: "2024-03-03T00:00:00.000Z",
    },
    housePoints: {
      kong: 1,
      leo: 1,
      phoenix: 10,
      tusker: 1,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66afc226452462ddf07b6529",
    },
    name: "Painting Competition",
    date: {
      $date: "2024-03-08T00:00:00.000Z",
    },
    housePoints: {
      kong: 1,
      leo: 2,
      phoenix: 3,
      tusker: 6,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66afc2f0452462ddf07b652d",
    },
    name: "Badminton (Girls)",
    date: {
      $date: "2024-04-14T00:00:00.000Z",
    },
    housePoints: {
      kong: 2,
      leo: 3,
      phoenix: 1,
      tusker: 5,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66afc30b452462ddf07b6531",
    },
    name: "Badminton (Boys)",
    date: {
      $date: "2024-04-14T00:00:00.000Z",
    },
    housePoints: {
      kong: 1,
      leo: 5,
      phoenix: 1,
      tusker: 5,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66afc344452462ddf07b6535",
    },
    name: "CP Contest",
    date: null,
    housePoints: {
      kong: 1,
      leo: 0,
      phoenix: 0,
      tusker: 0,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66afc3ac452462ddf07b6539",
    },
    name: "You laugh You Loose",
    date: {
      $date: "2024-06-14T00:00:00.000Z",
    },
    housePoints: {
      kong: 1,
      leo: 1,
      phoenix: 1,
      tusker: 1,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66b11dd4452462ddf07b6703",
    },
    name: "Time Capsule (Batch of 28) Intake 1",
    date: {
      $date: "2024-08-06T00:00:00.000Z",
    },
    housePoints: {
      kong: 1,
      leo: 5,
      phoenix: 2,
      tusker: 3,
    },
    description: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "66cdcd7bdfd22b55561ca17a",
    },
    name: "Time Capsule (Batch of 28) Intake 2",
    date: {
      $date: "2024-08-26T00:00:00.000Z",
    },
    housePoints: {
      kong: 3,
      leo: 5,
      phoenix: 2,
      tusker: 1,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "66d16b4ddfd22b55561ca34a",
    },
    name: "Chess 2024",
    date: {
      $date: "2024-08-29T00:00:00.000Z",
    },
    housePoints: {
      kong: 1,
      leo: 0,
      phoenix: 10,
      tusker: 0,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "66e292f09987867987717ebb",
    },
    name: "Rangoli competition ",
    date: {
      $date: "2024-09-08T00:00:00.000Z",
    },
    housePoints: {
      kong: 5,
      leo: 2,
      phoenix: 3,
      tusker: 1,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "66e8417782ea7c054df1c6b4",
    },
    name: "Dance Competition",
    date: {
      $date: "2024-09-16T00:00:00.000Z",
    },
    housePoints: {
      kong: 3,
      leo: 6,
      phoenix: 1,
      tusker: 3,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "66f967fa82ea7c054df1cec9",
    },
    name: "Football ",
    date: {
      $date: "2024-09-29T00:00:00.000Z",
    },
    housePoints: {
      kong: 4,
      leo: 6,
      phoenix: 10,
      tusker: 0,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6700df4805952bdae1617ccd",
    },
    name: "Debate Competition",
    date: {
      $date: "2024-10-04T00:00:00.000Z",
    },
    housePoints: {
      kong: 10,
      leo: 0,
      phoenix: 10,
      tusker: 0,
    },
    description:
      "1st - kong 10\n2nd - phoenix 6\n3rd - phoenix 4\n4th - kong 0",
    __v: 0,
  },
  {
    _id: {
      $oid: "670aa43705952bdae1618178",
    },
    name: "Drama Competition",
    date: {
      $date: "2024-10-12T00:00:00.000Z",
    },
    housePoints: {
      kong: 4,
      leo: 6,
      phoenix: 10,
      tusker: 6,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "670e995405952bdae161838a",
    },
    name: "Table tennis",
    date: {
      $date: "2024-10-15T00:00:00.000Z",
    },
    housePoints: {
      kong: 3,
      leo: 5,
      phoenix: 2,
      tusker: 0,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6748b657f731ac7ed5ce6bab",
    },
    name: "Basketball ",
    date: {
      $date: "2024-11-28T00:00:00.000Z",
    },
    housePoints: {
      kong: 10,
      leo: 0,
      phoenix: 10,
      tusker: 20,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631c54f731ac7ed5ce78f7",
    },
    name: "inSSTpire Week Dance Competition",
    date: {
      $date: "2024-12-05T00:00:00.000Z",
    },
    housePoints: {
      kong: 0,
      leo: 4,
      phoenix: 4,
      tusker: 16,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631c79f731ac7ed5ce78fa",
    },
    name: "inSSTpire Week Drama Competition",
    date: {
      $date: "2024-12-07T00:00:00.000Z",
    },
    housePoints: {
      kong: 0,
      leo: 10,
      phoenix: 6,
      tusker: 0,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631cb2f731ac7ed5ce78fd",
    },
    name: "inSSTpire Week Cricket Competition",
    date: {
      $date: "2024-12-04T00:00:00.000Z",
    },
    housePoints: {
      kong: 0,
      leo: 10,
      phoenix: 0,
      tusker: 10,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631cdcf731ac7ed5ce7900",
    },
    name: "inSSTpire Week Football Competition",
    date: {
      $date: "2024-12-05T00:00:00.000Z",
    },
    housePoints: {
      kong: 0,
      leo: 6,
      phoenix: 10,
      tusker: 4,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631d06f731ac7ed5ce7906",
    },
    name: "inSSTpire Week Throwball Competition",
    date: {
      $date: "2024-12-05T00:00:00.000Z",
    },
    housePoints: {
      kong: 4,
      leo: 0,
      phoenix: 6,
      tusker: 10,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631d3bf731ac7ed5ce7909",
    },
    name: "inSSTpire Week Innovision Hackathon",
    date: {
      $date: "2024-12-05T00:00:00.000Z",
    },
    housePoints: {
      kong: 7,
      leo: 11,
      phoenix: 14,
      tusker: 8,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631d61f731ac7ed5ce790c",
    },
    name: "inSSTpire Week AlgoStrike",
    date: {
      $date: "2024-12-04T00:00:00.000Z",
    },
    housePoints: {
      kong: 5,
      leo: 2,
      phoenix: 8,
      tusker: 5,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631d8ff731ac7ed5ce790f",
    },
    name: "inSSTpire Week Analytics Ascend",
    date: {
      $date: "2024-12-05T00:00:00.000Z",
    },
    housePoints: {
      kong: 8,
      leo: 8,
      phoenix: 3,
      tusker: 5,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631dc3f731ac7ed5ce7912",
    },
    name: "inSSTpire Week Robodog Competition",
    date: {
      $date: "2024-12-05T00:00:00.000Z",
    },
    housePoints: {
      kong: 5,
      leo: 0,
      phoenix: 6,
      tusker: 10,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631de9f731ac7ed5ce7915",
    },
    name: "inSSTpire Week Paper Dressing Competition",
    date: {
      $date: "2024-12-02T00:00:00.000Z",
    },
    housePoints: {
      kong: 10,
      leo: 6,
      phoenix: 14,
      tusker: 0,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631e0bf731ac7ed5ce7918",
    },
    name: "inSSTpire Week Face Painting Competition",
    date: {
      $date: "2024-12-03T00:00:00.000Z",
    },
    housePoints: {
      kong: 2,
      leo: 0,
      phoenix: 12,
      tusker: 6,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631e30f731ac7ed5ce791c",
    },
    name: "inSSTpire Week Team Painting",
    date: {
      $date: "2024-12-04T00:00:00.000Z",
    },
    housePoints: {
      kong: 21,
      leo: 5,
      phoenix: 12,
      tusker: 2,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631e56f731ac7ed5ce791f",
    },
    name: "inSSTpire Week Photography Competition",
    date: {
      $date: "2024-12-07T00:00:00.000Z",
    },
    housePoints: {
      kong: 0,
      leo: 10,
      phoenix: 0,
      tusker: 10,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631e8cf731ac7ed5ce7922",
    },
    name: "inSSTpire Week Reel Competition",
    date: {
      $date: "2024-12-07T00:00:00.000Z",
    },
    housePoints: {
      kong: 6,
      leo: 10,
      phoenix: 0,
      tusker: 4,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631eb0f731ac7ed5ce7925",
    },
    name: "inSSTpire Week Tech Podcast Competition",
    date: {
      $date: "2024-12-05T00:00:00.000Z",
    },
    housePoints: {
      kong: 0,
      leo: 10,
      phoenix: 10,
      tusker: 0,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631ed7f731ac7ed5ce7928",
    },
    name: "inSSTpire Wek Short Film Competition",
    date: {
      $date: "2024-12-06T00:00:00.000Z",
    },
    housePoints: {
      kong: 27,
      leo: 14,
      phoenix: 17,
      tusker: 20,
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67631f09f731ac7ed5ce792b",
    },
    name: "inSSTpire Week Participation Bonus",
    date: null,
    housePoints: {
      kong: 4,
      leo: 6,
      phoenix: 10,
      tusker: 8,
    },
    __v: 0,
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");

    // Get all databases
    const dbs = await mongoose.connection.db.admin().listDatabases();

    // Drop each database except system databases
    for (const db of dbs.databases) {
      const dbName = db.name;
      if (!["admin", "local", "config"].includes(dbName)) {
        await mongoose.connection.client.db(dbName).dropDatabase();
        console.log(`Dropped database: ${dbName}`);
      }
    }
    console.log("All non-system databases cleared...");

    // Transform the events data
    const transformedEvents = events.map((event) => ({
      ...event,
      _id: event._id.$oid,
      date: event.date ? new Date(event.date.$date) : null,
    }));

    // Insert new sample data
    await Event.insertMany(transformedEvents);
    await AdminEmail.insertMany(adminEmails);

    console.log("New database and collections created successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
