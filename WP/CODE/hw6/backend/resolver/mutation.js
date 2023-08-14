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
      return newUser.save();
    } catch (e) {
        throw new Error(`(${name}, ${subject}, ${score}) creation error: ` + e); 
    }
};

const updateScore = async (name, subject, score) => {
    try {
      return ScoreCard.updateOne({ name: name, subject: subject }, {
        $set: {
            score: score
        }
      });
    } catch (e) {
        throw new Error(`(${name}, ${subject}, ${score}) update error: ` + e); 
    }
};

export { deleteDB, addUser, updateScore };