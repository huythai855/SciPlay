class Courses {
    /*
        difficulty: grading the course's hardness from 1 to 3 (easy, medium, hard)
        science_ness: grading the science-ness from (-2 to 1) (Biology, Physics, Chemistry, Math)
        duration: the course's duration in seconds
        total_users: the total number of users who have taken the course
    */
    constructor(course_id, course_name, difficulty, science_ness, duration, total_users) {
        this.course_id = course_id;
        this.course_name = course_name;
        this.difficulty = difficulty;
        this.science_ness = science_ness;
        this.duration = duration;
        this.total_users = total_users;
    }
}

function euclid_distance(course1, course2, science_ness_weight = 0.2, duration_weight = 0.4) {
    console.log(
        Math.sqrt(
            (course1.difficulty - course2.difficulty) ** 2 +
            science_ness_weight * (course1.science_ness - course2.science_ness) ** 2 +
            duration_weight * (course1.duration - course2.duration) ** 2 +
            (course1.total_users - course2.total_users) ** 2
        )
    );
    return Math.sqrt(
        (course1.difficulty - course2.difficulty) ** 2 +
        science_ness_weight * (course1.science_ness - course2.science_ness) ** 2 +
        duration_weight * (course1.duration - course2.duration) ** 2 +
        (course1.total_users - course2.total_users) ** 2
    );
}

function cosine_similarity(course1, course2, science_ness_weight = 0.2, duration_weight = 0.4) {
    const len1 = Math.sqrt(
        course1.difficulty ** 2 +
        science_ness_weight * course1.science_ness ** 2 +
        duration_weight * course1.duration ** 2 +
        course1.total_users ** 2
    );

    const len2 = Math.sqrt(
        course2.difficulty ** 2 +
        science_ness_weight * course2.science_ness ** 2 +
        duration_weight * course2.duration ** 2 +
        course2.total_users ** 2
    );

    const dot_product =
        course1.difficulty * course2.difficulty +
        science_ness_weight * course1.science_ness * course2.science_ness +
        duration_weight * course1.duration * course2.duration +
        course1.total_users * course2.total_users;

    console.log(dot_product / (len1 * len2));
    return dot_product / (len1 * len2);
}

function recommend_courses(course, k, distance_func) {
    if (course.course_id < 0 || course.course_id >= courses.length) {
        return null;
    }

    let sorted_courses;
    if (distance_func === euclid_distance) {
        sorted_courses = courses.sort((a, b) => euclid_distance(course, a, 0.2, 0.4) - euclid_distance(course, b, 0.2, 0.4));
    } else if (distance_func === cosine_similarity) {
        sorted_courses = courses.sort((a, b) => cosine_similarity(course, a, 0.2, 0.4) - cosine_similarity(course, b, 0.2, 0.4));
    }

    return sorted_courses.slice(0, k);
}

// test
const courses = [
    new Courses(1, "Ly 2", 2, -1, 300, 600),
    new Courses(2, "Ly 3", 3, -1, 300, 200),
    new Courses(3, "Hoa 1", 1, 0, 280, 402),
    new Courses(4, "Hoa 3", 3, 0, 500, 120),
    new Courses(5, "Toan 3", 3, 1, 1000, 500),
    new Courses(6, "Sinh 2", 2, -2, 300, 600),
];

if (typeof module !== 'undefined' && module.exports) {
    // Export the necessary functions and classes, if you wanna use it in another file
    module.exports = {
        Courses,
        euclid_distance,
        cosine_similarity,
        recommend_courses,
        courses,
    };
}

// If using Node.js in another file, import the necessary functions and classes:
//   const { Courses, euclid_distance, recommend_courses, courses } = require('./filename.js');

const courseA = new Courses(0, "Ly 1", 1, -1, 350, 800);
const recommended = recommend_courses(courseA, 3, euclid_distance);
for (const course of recommended) {
    console.log(course.course_name);
}