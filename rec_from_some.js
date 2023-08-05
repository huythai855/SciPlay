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
        this.duration = duration / 1000;
        this.total_users = total_users /100;
    }
}


function recommendSimilarCourses(currentCourses, allCourses, k) {
    function euclid_distance(course1, course2, science_ness_weight = 0.2, duration_weight = 0.4) {
        // console.log(
        //     Math.sqrt(
        //         (course1.difficulty - course2.difficulty) ** 2 +
        //         science_ness_weight * (course1.science_ness - course2.science_ness) ** 2 +
        //         duration_weight * (course1.duration - course2.duration) ** 2 +
        //         (course1.total_users - course2.total_users) ** 2
        //     )
        // );
        return Math.sqrt(
            (course1.difficulty - course2.difficulty) ** 2 +
            science_ness_weight * (course1.science_ness - course2.science_ness) ** 2 +
            duration_weight * (course1.duration - course2.duration) ** 2 +
            (course1.total_users - course2.total_users) ** 2
        );
    }

    let recommendations = [];
    for (let i = 0; i < allCourses.length; i++) {
        const course = allCourses[i];
        if (!currentCourses.includes(course)) {
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

const courses = [
    new Courses(1, "Ly 2", 2, -1, 3000, 600),
    new Courses(2, "Ly 3", 3, -1, 3000, 200),
    new Courses(3, "Hoa 1", 1, 0, 2800, 400),
    new Courses(4, "Hoa 2", 3, 0, 4000, 120),
    new Courses(5, "Toan 3", 3, 1, 8000, 500),
    new Courses(6, "Sinh 2", 2, -2, 3000, 180),
];

const currentCourses = [courses[0], courses[1]];

recommended = recommendSimilarCourses(currentCourses, courses, 3);
for (let i = 0; i < recommended.length; i++) {
    const [distance, course] = recommended[i];
    console.log(distance, course.name);
}
