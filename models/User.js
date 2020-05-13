module.exports = (Schema, model) => {
  const User = new Schema({
    name: String,
    username: String,
    email: String,
    favorites: Array,
    weight: Number,
    height: String,
    admin: { type: Boolean, default: false }
  })

  return model('User', User)
}
