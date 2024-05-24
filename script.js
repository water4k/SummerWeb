document.addEventListener('DOMContentLoaded', function () {
    const schedule = {
        "Monday": [
            "Wake up at 7:00 AM",
            "Workout from 7:15 AM to 8:15 AM",
            "Bench Press: 4 sets of 6-8 reps",
            "Dumbbell Rows: 3 sets of 8-12 reps",
            "Squats: 3 sets of 10-12 reps",
            "Pushups: 3 sets of as many as you can",
            "Pull-Ups: 3 sets of as many as you can",
            "Core workout (6 minutes)",
            "Run 1 mile",
            "Language Learning from 8:30 AM to 9:15 AM",
            "Other Subjects from 9:30 AM to 10:15 AM",
            "Free Time from 10:15 AM to 12:00 PM"
        ],
        "Tuesday": [
            "Wake up at 7:00 AM",
            "Workout from 7:15 AM to 8:15 AM",
            "Dumbbell Curls: 3 sets of 6-8 reps",
            "Pushups: 3 sets of as many as you can",
            "Pull-Ups: 3 sets of as many as you can",
            "Squats: 3 sets of 10-12 reps",
            "2 minutes of sit-ups",
            "Sprinting: 6 x 100 meters",
            "Language Learning from 8:30 AM to 9:15 AM",
            "Other Subjects from 9:30 AM to 10:15 AM",
            "Free Time from 10:15 AM to 12:00 PM"
        ],
        "Wednesday": [
            "Wake up at 7:00 AM",
            "Workout from 7:15 AM to 8:15 AM",
            "Bench Press: 4 sets of 6-8 reps",
            "Dumbbell Rows: 3 sets of 8-12 reps",
            "Pushups: 3 sets of as many as you can",
            "Pull-Ups: 3 sets of as many as you can",
            "Core workout (6 minutes)",
            "Run 1 mile",
            "Language Learning from 8:30 AM to 9:15 AM",
            "Other Subjects from 9:30 AM to 10:15 AM",
            "Free Time from 10:15 AM to 12:00 PM"
        ],
        "Thursday": [
            "Wake up at 7:00 AM",
            "Workout from 7:15 AM to 8:15 AM",
            "Dumbbell Curls: 3 sets of 6-8 reps",
            "Pushups: 3 sets of as many as you can",
            "Pull-Ups: 3 sets of as many as you can",
            "Squats: 3 sets of 10-12 reps",
            "2 minutes of sit-ups",
            "Sprinting: 6 x 100 meters",
            "Language Learning from 8:30 AM to 9:15 AM",
            "Other Subjects from 9:30 AM to 10:15 AM",
            "Free Time from 10:15 AM to 12:00 PM"
        ],
        "Friday": [
            "Wake up at 7:00 AM",
            "Workout from 7:15 AM to 8:15 AM",
            "Bench Press: 4 sets of 6-8 reps",
            "Dumbbell Rows: 3 sets of 8-12 reps",
            "Pushups: 3 sets of as many as you can",
            "Pull-Ups: 3 sets of as many as you can",
            "Core workout (6 minutes)",
            "Run 1 mile",
            "Language Learning from 8:30 AM to 9:15 AM",
            "Other Subjects from 9:30 AM to 10:15 AM",
            "Free Time from 10:15 AM to 12:00 PM"
        ]
    };

    const taskList = document.getElementById('taskList');
    const newTaskInput = document.getElementById('newTaskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const longTermGoals = document.getElementById('longTermGoals');
    const saveGoalsBtn = document.getElementById('saveGoalsBtn');
    const currentDate = document.getElementById('currentDate');


