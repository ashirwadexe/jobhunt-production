import { Job } from '../models/job.model.js'

export const postJob = async (req, res) => {
    try {
        const {title, description, requirments, salary, location, jobType, experience, position, companyId} = req.body;
        const userId = req.id;

        if(!title || !description || !requirments || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(404).json({
                message: "something is missing",
                success: false
            });
        }

        //create a job
        const job = await Job.create({
            title,
            description,
            requirments: requirments.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            createdBy: userId
        });

        return res.status(200).json({
            message: "job created successfully",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}

//get all jobs
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                {title: {$regex: keyword, $options: "i"}},
                {description: {$regex: keyword, $options: "i"}}
            ]
        };

        const jobs = await Job.find(query).populate('company', 'name'); // Populate only the 'name' field
        if(!jobs) {
            return res.status(404).json({
                message: "Jobs not found",
                success: true
            });
        }

        return res.status(200).json({
            jobs,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}

//get jobs by id
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'applications'
        });

        if(!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        }

        return res.status(200).json({
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}

//get jobs created by admin -> it will displayed to the admin
export const getAdminJob = async (req, res) => {
    try {
        const adminId = req.id;
        const job = await Job.findOne({createdBy: adminId});

        if(!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        }
        return res.status(200).json({
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}