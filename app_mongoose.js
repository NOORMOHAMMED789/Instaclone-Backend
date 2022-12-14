const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const userData = [
  {
    name: "Siva",
    location: "Bengaluru",
    likes: 64,
    description: "Kick start your career",
    PostImage:
      "https://res.cloudinary.com/dymojrrtf/image/upload/v1670907234/10x/i6zvnstqk6hcxjvnhqyc.jpg",
    date: new Date().getFullYear(),
  },
  {
    name: "Neeraj",
    location: "Pune",
    likes: 30,
    description: "Sample Description",
    PostImage:
      "https://res.cloudinary.com/dymojrrtf/image/upload/v1670929384/10x/mevbb8egjj81cc0ie3kc.jpg",
    date: new Date().getFullYear(),
  },
  {
    name: "Rahul",
    location: "Hyderabad",
    likes: 30,
    description: "Sample Description for Post",
    PostImage:
      "https://res.cloudinary.com/dymojrrtf/image/upload/v1670929166/10x/pyavaz8vefmmpvzj0xx1.jpg",
    date: new Date().getFullYear(),
  },
];

async function main() {
  await mongoose.connect(
    "mongodb+srv://noor:instaclone@insta.gdz5loi.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("connected successfully to server");

  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;

  const userSchema = new Schema({
    name: { type: String },
    age: { type: Number },
    likes: { type: Number },
    description: { type: String },
    date: { type: Date },
  });

  const User = mongoose.model("Users", userSchema);
  try {
    for (let i = 0; i < userData.length; i++) {
      const user = await User.create({
        name: userData[i].name,
        age: userData[i].age,
        likes: userData[i].likes,
        description: userData[i].description,
        PostImage: userData[i].PostImage,
        date: userData[i].date,
      });
      console.log(user);
    }
  } catch (e) {
    console.log(e.message);
  }

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => mongoose.disconnect());

module.exports = userData;
