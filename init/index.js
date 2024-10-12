const mongoose = require("mongoose");
const initData = require("./data.js");
const BuySellItem = require("../models/buy.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/CampusMitra";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}
const initDB = async () => {
  await BuySellItem.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
  }));
  await BuySellItem.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
