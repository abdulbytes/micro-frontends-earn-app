/**
 * Contains JobApplication routes
 */
const constants = require("../app-constants");

module.exports = {
  "/myJobApplications": {
    get: {
      controller: "JobApplicationController",
      method: "getMyJobApplications",
      auth: "jwt",
      scopes: [constants.Scopes.READ_JOBAPPLICATION],
    },
  },
};
