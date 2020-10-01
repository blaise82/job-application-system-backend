import bcrypt from "bcryptjs";
import { encode, decode } from "../utils/jwtTokenizer";
import uuid from "uuid/v4";
import Models from "../database/models";

const { Jobs, Applications } = Models;

class applicationController {
  static async apply(req, res) {
    try {
      const {
        body: { jobId },
        user: { id, email },
      } = req;


      if (req.files === null) {
        return res.status(400).json({
          status: 400,
          error: "No data were submitted",
        });
      }

      let extension;
      const { file } = req.files;
	  console.log("fileel", file);
      const FileId = uuid();

      if (file.name.indexOf(".pdf") > -1) {
        extension = "pdf";
      } else if (file.name.indexOf(".docx")) {
        extension = "docx";
      }
      //save

      const newApplication = await Applications.create({
        id: uuid(),
        userID: id,
        jobId,
        path: `${FileId}.${extension}`,
      });
		file.mv(`${process.env.UPLOADS}/${FileId}.${extension}`, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
      });

      const data = {
        newApplication,
      };
      return res.status(201).json({
        status: 201,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  static async GetAllJobs(req, res) {
    try {
      const data = await Jobs.findAll();
      return res.status(201).json({
        status: 201,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  static async GetAllApplications(req, res) {
    try {
      const data = await Applications.findAll();
      return res.status(201).json({
        status: 201,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }
}

export default applicationController;
