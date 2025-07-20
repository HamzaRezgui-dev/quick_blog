export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, image, isPublished } =
      JSON.parse(req.body);

    const imageFile = req.file;

    if (!title ||!description || !category || !!imageFile) {
        return res.json({success: false, message: "Missing required fields"})
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
