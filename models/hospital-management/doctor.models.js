const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      reuired: true,
    },

    salary: {
      type: String,
      required: true,
    },

    qualifications: {
      type: String,
      required: true,
    },

    experienceInYears: {
      type: Number,
      default: 0,
    },

    worksInHospitals: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Hospital",
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
