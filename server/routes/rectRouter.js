const Router = require('express');
const router = new Router();
const rectController = require('../controllers/RectController');

router.get('/', rectController.getRects);
router.post('/', rectController.addRect);
router.put('/:id', rectController.updateRect);

module.exports = router;