import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('server is ready');

})

//get a list of five jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: "The Programmer's Breakfast",
          content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
          id: 2,
          title: "The Object-Oriented Chicken",
          content: "Why did the chicken become an object-oriented programmer? Because it wanted to lay reusable eggs!"
        },
        {
          id: 3,
          title: "The JavaScript Party",
          content: "Why do JavaScript developers prefer parties over callbacks? Because they can't stand being in a callback hell!"
        },
        {
          id: 4,
          title: "The SQL Query's Complaint",
          content: "A SQL query walks into a bar, walks up to two tables, and asks, 'Can I join you?'"
        },
        {
          id: 5,
          title: "The Code Reviewer's Dilemma",
          content: "Why do code reviewers always feel cold? Because they constantly find too many drafts in the code!"
        }
      ];
      res.send(jokes);
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
 })