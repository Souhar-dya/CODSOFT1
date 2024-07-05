const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// Create a new quiz
router.post('/', async (req, res) => {
  try {
    const { title, questions } = req.body;
    const newQuiz = new Quiz({ title, questions, scores: [] });
    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all available quizzes
router.get('/', async (req, res) => {
  try {
    console.log('Fetching quizzes...'); // Add this line
    const quizzes = await Quiz.find({});
    console.log('Quizzes fetched:', quizzes); // Add this line
    res.json(quizzes);
  } catch (err) {
    console.error('Error fetching quizzes:', err); // Update this line
    res.status(500).json({ error: err.message });
  }
});

// Get a specific quiz by ID
router.get('/:id', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/quizzes/:id/score
router.post('/:id/score', async (req, res) => {
  const { id } = req.params;
  const { userId, score } = req.body;

  if (!userId) {
    return res.status(401).json({ error: 'User not logged in' });
  }

  try {
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    quiz.scores.push({ userId, score });
    await quiz.save();

    res.status(201).json({ message: 'Score saved successfully' });
  } catch (err) {
    console.error('Error saving score:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;