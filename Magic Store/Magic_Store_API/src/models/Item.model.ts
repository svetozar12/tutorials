import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  ItemType: {
    type: String,
    enum: ["Magic Staff", "Sword", "Bow"],
    required: true,
  },
  ItemPrice: {
    type: Number,
    required: true,
  },
});

const MagicItem = mongoose.model("magic_items", ItemSchema);
export default MagicItem;
