const express = require("express");
const Asset = require("../models/asset.model");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Asset.find());
});

router.post('/', async (req, res) => {
  try {
    const asset = new Asset({
      ...req.body,
      history: [
        {
          at: new Date(),
          action: 'CREATED',
          changes: [
            {
              field: 'status',
              oldValue: null,
              newValue: req.body.status
            }
          ]
        }
      ]
    });

    const saved = await asset.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);

    if (!asset) {
      return res.status(404).json({ message: 'Asset nicht gefunden' });
    }

    res.json(asset);
  } catch (err) {
    res.status(400).json({ message: 'Ungültige ID' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (!asset) {
      return res.status(404).json({ message: 'Not found' });
    }

    const fields = [
      'name',
      'type',
      'serialNumber',
      'status',
      'assignedTo',
      'location',
      'notes'
    ];

    const changes = [];

    fields.forEach((f) => {
      if (req.body[f] !== undefined && req.body[f] !== asset[f]) {
        changes.push({
          field: f,
          oldValue: asset[f],
          newValue: req.body[f]
        });
        asset[f] = req.body[f];
      }
    });

    if (changes.length > 0) {
      asset.history.push({
        at: new Date(),
        action: 'UPDATED',
        changes
      });
    }

    const saved = await asset.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  await Asset.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
});

module.exports = router;
