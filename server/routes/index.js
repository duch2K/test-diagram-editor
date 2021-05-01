const Router = require('express');
const router = new Router();

const circleRouter = require('./circleRouter');
const rectRouter = require('./rectRouter');

router.use('/circles', circleRouter);
router.use('/rects', rectRouter);

module.exports = router;