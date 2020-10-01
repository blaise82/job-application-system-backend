import express from 'express';
import applicationController from '../controllers/applicationController'
import checkUser from '../utils/checkUser'

const router = express.Router();


router.post('/apply', checkUser , applicationController.apply);
router.get('/jobs', checkUser , applicationController.GetAllJobs);
router.get('/applications', checkUser , applicationController.GetAllApplications);

export default router;
