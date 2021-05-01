const Router = require('express');
const router = new Router();
const circleController = require('../controllers/CircleController');

router.get('/', circleController.getCircles);
router.post('/', circleController.addCircle);
router.put('/:id', circleController.updateCircle);

module.exports = router;