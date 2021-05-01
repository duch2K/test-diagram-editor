const { Circle } = require('../models');

class CircleController {
  async getCircles(req, res) {
    const circles = await Circle.findAll();

    return res.json(circles);
  }

  async addCircle(req, res) {
    const data = req.body;
    const circle = await Circle.create(data);

    return res.json(circle);
  }

  async updateCircle(req, res, next) {
    const { id } = req.params;
    const { x, y } = req.body;

    const [num, rows] = await Circle.update({ x, y }, { where: { id } });
  }
}

module.exports = new CircleController();