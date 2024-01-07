const { User } = require('../model/Category');
const { Category } = require('../model/Category');

exports.fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).exec();
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
      const doc = await category.save();
      res.status(201).json(doc);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  exports.fetchUserById = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
  exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  };