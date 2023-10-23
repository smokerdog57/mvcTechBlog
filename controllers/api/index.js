const router = require('express').Router();
const splashRoutes = require('../splashRoutes');
const userRoutes = require('../userRoutes')
const dashboardRoutes = require('../dashboardRoutes');

router.use('/', splashRoutes);
router.use('/login', userRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;