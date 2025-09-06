const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://nehathakur2308:nehathakur2321@cluster0.zwyqxsy.mongodb.net/"
  )
  .then(() => console.log("database connected successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// create user model
const User = mongoose.model("User", userSchema);

async function runQueryExample() {
  try {
    // create a new document

    const newUser = await User.create({
      name: "Updated User",
      email: "update@2108.com",
      age: "75",
      isActive: true,
      tags: ["developer", "frontend"],
    });


    // Another way to create a user:--

    //    const newUser = new User({
    //   name: "Rahul Thakur",
    //   email: "RahulTh@123.com",
    //   age: "13",
    //   isActive: true,
    //   tags: ["developer", "Ui/ux designer", "frontend"],
    // });

    // await newUser.save();
    console.log('Created new user', newUser)

    // const allUser = await User.find({});
    // console.log(allUser)

    // const getUserOfActiveFalse =await User.find({isActive :false});
    // console.log(getUserOfActiveFalse)

    // const getRishikaRanjan = await User.findOne({name: "Rishika Ranjan"})
    // console.log(getRishikaRanjan)

    // const getLastCreatedUserByUserid = await User.findById(newUser._id)
    // console.log(getLastCreatedUserByUserid, 'getLastCreatedUserByUserid')

    // const selectedFields = await User.find().select('name email -_id');
    // console.log(selectedFields);

    // const limitedUsers = await User.find().limit(5).skip(1);
    // console.log(limitedUsers);

    // const sortedUsers =await User.find().sort({age: -1})
    // console.log(sortedUsers)

    // const countDocument = await User.countDocuments({isActive: true});
    // console.log(countDocument)

    // const deletedUser = await User.findByIdAndDelete(newUser._id);
    // console.log('deleted' , deletedUser)

    // const UpdatedUser = await User.findByIdAndUpdate(newUser._id,{
    //     $set : {age:100} , $push: {tags:'updated'}
    // },{new: true});
    // console.log('updated user->' , UpdatedUser)

  } catch (e) {
    console.log("Error -> ", e);
  } finally {
    await mongoose.connection.close();
  }
}
runQueryExample();
