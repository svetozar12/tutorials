import checkBody from "../utils/checkBody";
import { Router } from "express";
import MagicItem from "../models/Item.model";

const items = Router();

items.get("/:_id", async (req, res) => {
  try {
    const Item = await MagicItem.findOne({ _id: req.params._id });
    if (!Item) return res.status(404).send("We don't have such magic item.");
    return res.status(200).json({ data: Item });
  } catch (error) {
    return res.status(501).send("Internal Server Error");
  }
});

items.get("/", async (req, res) => {
  try {
    const ItemsInStore = await MagicItem.find();
    if (ItemsInStore.length <= 0) return res.send("No magic items here :(");
    return res.status(200).json({ data: ItemsInStore });
  } catch (error) {
    return res.status(501).send("Internal Server Error");
  }
});

items.post("/", async (req, res) => {
  try {
    if (!checkBody(req.body))
      return res.status(400).send("This item isn't magical enough 🧙🏻‍♂️ !!!");

    const NewMagicItem = await MagicItem.create(req.body);
    return res.status(201).json({ data: NewMagicItem });
  } catch (error) {
    console.log(error);

    return res.status(501).send("Internal Server Error");
  }
});

items.put("/:_id", async (req, res) => {
  try {
    if (!checkBody(req.body))
      return res.status(400).send("These  changes aren't magical enough 🧙🏻!!!");
    const id = req.params._id;
    const Item = await MagicItem.findByIdAndUpdate(id, req.body);
    if (!Item) return res.status(404).send("We don't have such magic item.");
    return res.send("Thank you for updating this item").status(201);
  } catch (error) {
    return res.status(501).send("Internal Server Error");
  }
});

items.delete("/:_id", async (req, res) => {
  try {
    const Item = await MagicItem.deleteOne({ _id: req.params._id });
    if (Item.deletedCount <= 0)
      return res.status(404).send("We don't have such magic item.");
    return res.status(201).send("This magic item isn't worthy anymore");
  } catch (error) {
    return res.status(501).send("Internal Server Error");
  }
});

export default items;
