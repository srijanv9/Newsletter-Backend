import { Entry } from "./../model/entry.js";

export const register = async (req, res, next) => {
  // console.log("1");
  try {
    // console.log("2");
    const { name, email, number } = req.body;
    let entry = await Entry.findOne({ email });
    if (entry) return next(new ErrorHandler("User Already Exists!", 400));

    entry = await Entry.create({ name, email, number });
    res.status(201).json({
      success: true,
      message: "Entry Added Successfully",
    });
  } catch (error) {
    next(error);
  }
};
