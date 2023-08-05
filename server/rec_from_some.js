const { bigqueryClient } = require('./big_query_client.js');
const { getDataFromBigQuery } = require('./big_query/query.js');
const { Model } = require('@google-cloud/bigquery');
class Courses {
    /*
        difficulty: grading the course's hardness from 1 to 3 (easy, medium, hard)
        science_ness: grading the science-ness from (-2 to 1) (Biology, Physics, Chemistry, Math)
        duration: the course's duration in seconds
        total_users: the total number of users who have taken the course
    */
    constructor(course_id, name, difficulty, science_ness, duration, total_users) {
        this.course_id = course_id;
        this.name = name;
        this.difficulty = difficulty;
        this.science_ness = science_ness;
        this.duration = duration / 100;
        this.total_users = total_users / 100;
    }


}


function recommendSimilarCourses(currentCourses, allCourses, k) {
    function euclid_distance(course1, course2, science_ness_weight = 0.2, duration_weight = 0.4) {
        return Math.sqrt(
            (course1.difficulty - course2.difficulty) ** 2 +
            science_ness_weight * (course1.science_ness - course2.science_ness) ** 2 +
            duration_weight * ((course1.duration - course2.duration) / 1000) ** 2 +
            ((course1.total_users - course2.total_users) / 100) ** 2
        );
    }

    let recommendations = [];
    let allCourses_id = [];
    let currentCourse_id = [];

    allCourses.map(obj => { allCourses_id.push(obj.course_id) });
    currentCourses.map(obj => { currentCourse_id.push(obj.course_id) });
    for (let i = 0; i < allCourses.length; i++) {
        const course = allCourses[i];
        if (currentCourse_id.includes(allCourses_id[i]) === false) {
            for (let j = 0; j < currentCourses.length; j++) {
                const currentCourse = currentCourses[j];
                recommendations.push([euclid_distance(currentCourse, course, 0.2, 0.4), course]);
            }
        }
    }

    let idx = 1;
    let sum = 0;
    let finalRecommendations = [];
    for (let i = 0; i < recommendations.length; i++) {
        const [distance, course] = recommendations[i];
        sum += distance;
        if (idx % currentCourses.length === 0) {
            finalRecommendations.push([sum / currentCourses.length, course]);
            sum = 0;
        }
        idx += 1;
    }

    finalRecommendations.sort((a, b) => a[0] - b[0]); // Sắp xếp theo khoảng cách
    return finalRecommendations.slice(0, k);
}

async function getCourse_w_attri(user_id) {
    const rows = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'course_attendance',
        column: ['course_id'],
        conditions: [`student_id=${user_id}`],
        limit: 3,
    });

    for (let i = 0; i < rows.length; i++) {
        const { course_id } = rows[i];
        const query = 'SELECT * FROM `sciplay_dataset.courses` WHERE course_id = ' + course_id + ';';
        const options = {
            query: query,
            location: 'US',
        }

        const [course] = await bigqueryClient.query(options);
        [rows[i]] = course;
    }
    return rows;
}

async function getAllCourse() {
    const query = 'SELECT * FROM `sciplay_dataset.courses`;';
    const options = {
        query: query,
        location: 'US',
    }
    const [rows] = await bigqueryClient.query(options);
    return rows;
}

async function getRecommendation(user_id, num) {
    const currentCourses = await getCourse_w_attri(user_id);
    const courses = await getAllCourse();
    const recommended = recommendSimilarCourses(currentCourses, courses, num);
    let rows = [];
    recommended.map(obj => rows.push(obj[1]));
    // console.log(rows);
    return rows;
}

module.exports = { getRecommendation }