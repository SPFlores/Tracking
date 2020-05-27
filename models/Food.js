module.exports = (Schema, model) => {
  const Food = new Schema({
    name: String,
    calories: Number,
    total_fat: Number,
    saturated_fat: Number,
    trans_fat: Number,
    cholesterol: Number,
    sodium: Number,
    total_carbs: Number,
    fiber: Number,
    sugars: Number,
    added_sugar: Number,
    iron: Number,
    vitamin_d: Number,
    potassium: Number,
    protein: Number,
    instructions: String
  })

  return model('Food', Food)
}
