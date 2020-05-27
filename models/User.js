module.exports = (Schema, model) => {
  const User = new Schema({
    name: String,
    username: String,
    email: String,
    favorites: Array,
    height: String,
    weight: Array,
    admin: { type: Boolean, default: false }
  })

  return model('User', User)
}
