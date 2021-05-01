const { Rect } = require('../models');

class RectController {
  async getRects(req, res) {
    const rects = await Rect.findAll();

    return res.json(rects);
  }

  async addRect(req, res) {
    const data = req.body;
    const rect = await Rect.create(data);

    return res.json(rect);
  }

  async updateRect(req, res, next) {
    const { id } = req.params;
    const { x, y } = req.body;
    
    const [num, rows] = await Rect.update({ x, y }, { where: { id } });
  }
}

module.exports = new RectController();