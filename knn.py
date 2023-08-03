import math

class Courses:
    """
        difficulty: 1 - 3
        science_ness: -2 - 1 (Sinh, Ly, Hoa, Toan)
        duration: 
        total_users: 
        chosen: da hoc truoc do chua
    """
    def __init__(self, course_id, course_name, difficulty, science_ness, duration, total_users, chosen = False):
        self.course_id = course_id
        self.course_name = course_name
        self.difficulty = difficulty
        self.science_ness = science_ness
        self.duration = duration
        self.total_users = total_users
        self.chosen = chosen

def euclid_distance(course1, course2, science_ness_weight = 0.2, duration_weight = 0.4):
    if course2.chosen == True:
        return math.inf
    print(math.sqrt((course1.difficulty - course2.difficulty) **2 + science_ness_weight * (course1.science_ness - course2.science_ness) **2 + duration_weight * (course1.duration - course2.duration) **2 + (course1.total_users - course2.total_users) ** 2))
    return math.sqrt((course1.difficulty - course2.difficulty) **2 + science_ness_weight * (course1.science_ness - course2.science_ness) **2 + duration_weight * (course1.duration - course2.duration) **2 + (course1.total_users - course2.total_users) ** 2)

def cosine_similarity(course1, course2, science_ness_weight = 0.2, duration_weight = 0.4):
    if course2.chosen == True:
        return -math.inf
    len1 = math.sqrt(course1.difficulty **2 + science_ness_weight * course1.science_ness **2 + duration_weight * course1.duration **2 + course1.total_users **2)

    len2 = math.sqrt(course2.difficulty **2 + science_ness_weight * course2.science_ness **2 + duration_weight * course2.duration **2 + course2.total_users **2)

    dot_product = course1.difficulty * course2.difficulty + science_ness_weight * course1.science_ness * course2.science_ness + duration_weight * course1.duration * course2.duration + course1.total_users * course2.total_users

    print(dot_product / (len1 * len2))
    return dot_product / (len1 * len2)

def recommend_courses(course, k, distance_func):
    if (course.course_id < 0 or course.course_id >= len(courses)):
        return None
    if distance_func == euclid_distance:
        sorted_courses = sorted(courses, key=lambda x: euclid_distance(course, x, 0.2, 0.4))
    elif distance_func == cosine_similarity:
        sorted_courses = sorted(courses, key = lambda x: cosine_similarity(course, x, 0.2, 0.4))

    return sorted_courses[:k]


# test
courses = [
    Courses(1, "Ly 2", 2, -1, 300, 600, False),
    Courses(2, "Ly 3", 3, -1, 300, 200, False),
    Courses(3, "Hoa 1",  1, 0, 280, 402, False),
    Courses(4, "Hoa 3", 3, 0, 500, 120, False),
    Courses(5, "Toan 3", 3, 1, 1000, 500, False),
    Courses(6, "Sinh 2", 2, -2, 300, 600, False),
]

if __name__ == "__main__":
    courseA = Courses(0, "Ly 1", 1, -1, 350, 800, True)
    recommended = recommend_courses(courseA, 3, euclid_distance)
    for course in recommended:
        print(course.course_name)