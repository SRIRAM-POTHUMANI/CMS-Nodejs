import bcrypt from "bcrypt";

//Extracted functions
export async function getPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}
export async function addUser(client, addUsers) {
  return await client
  .db("cms")
  .collection("users")
  .insertMany(addUsers);
}
export async function getUsers(client) {
  return await client
  .db("cms")
  .collection("users")
  .find({})
  .toArray();
}
export async function getUsersbyid(client, username) {
  return await client
  .db("cms")
  .collection("users")
  .findOne({ username: username });
}

export async function updateUser(client, username, newData) {
  return await client
    .db("cms")
    .collection("users")
    .updateOne({ username: username }, { $set: newData });
}
export async function delUser(client, username) {
  return await client
  .db("cms")
  .collection("users")
  .deleteOne({ username: username });
}

export async function getfaqs(client) {
  return await client
  .db("cms")
  .collection("faq")
  .find({})
  .toArray();
}
export async function getfaqbyid(client, name) {
  return await client
  .db("cms")
  .collection("faq")
  .findOne({ name: name });
}

export async function getpricing(client) {
  return await client
  .db("cms")
  .collection("pricing")
  .find({})
  .toArray();
}
export async function getpricingbyid(client, plan) {
  return await client
  .db("cms")
  .collection("pricing")
  .findOne({ name: plan });
}