const Blogpost = require("../../models/Blogpost");

const dashboardController = {
  renderDashboard: async (req, res) => {
    try {
      const userId = req.session.userId; // Assuming you store user ID in the session
      const blogposts = await Blogpost.findAll({
        where: { user_id: userId }, // Filter by the user's ID
      });

      // Render the 'dashboard' view and pass the user's blog posts
      res.render("dashboard", { pageTitle: "Dashboard", posts: blogposts });
    } catch (error) {
      console.error("Error in renderDashboard:", error);
      res.status(500).send("dashBoardController: Internal Server Error");
    }
  },
};

module.exports = dashboardController;