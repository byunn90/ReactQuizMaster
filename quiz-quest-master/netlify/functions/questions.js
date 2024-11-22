const data = require("../../data/questions.json"); // Path to your JSON file

exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(data.questions), // Return only the questions array
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch questions" }),
    };
  }
};
