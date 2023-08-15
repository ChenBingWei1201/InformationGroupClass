import ScoreCard from "../models/ScoreCard.js";

const deleteDB = async () => {
  try {
    await ScoreCard.deleteMany({});
    console.log("Database deleted");
  } catch (e) { 
      throw new Error("Database deletion failed"); 
  }
};

const addUser = async (name, subject, score) => {
  try {
    const newUser = new ScoreCard({ name, subject, score });
    console.log("Created user", newUser);
    await newUser.save();
  } catch (e) {
      throw new Error(`(${name}, ${subject}, ${score}) creation error: ` + e); 
  }
};

const updateScore = async (name, subject, score) => {
  try {
    await ScoreCard.updateOne({ name, subject }, {
      $set: {
        score: score
      }
    });
  } catch (e) {
      throw new Error(`(${name}, ${subject}, ${score}) update error: ` + e); 
  }
};

const queryData = async (type, queryString) => {
  try {
    if (type === "name")
      return await ScoreCard.find({ name: queryString });
    else if (type === "subject")
      return await ScoreCard.find({ subject: queryString });
  } catch (e) {
      throw new Error(`(${queryString}) query error: ` + e);
  }
}

export { deleteDB, addUser, updateScore, queryData };