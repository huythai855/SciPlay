# import math
from rec_from_one import Courses, euclid_distance

def recommend_similar_courses(current_courses, all_courses, k):
    recommendations = []  # luu lai kc tu tung course dang hoc den cac course con lai
    for course in all_courses:
        if course not in current_courses:
            for current_course in current_courses:
                recommendations.append((euclid_distance(current_course, course, 0.2, 0.2), course))

    # for (distance, course) in recommendations:
    #     print((distance, course.course_name))
    
    idx = 1
    sum = 0
    final_recommendations = [] # luu trung binh kc tu courseA den cac course hien tai va courseA
    for (distance, course) in recommendations:
        sum += distance
        if idx % len(current_courses) == 0:
            final_recommendations.append((sum / len(current_courses), course))
            sum = 0
        idx += 1
    final_recommendations = sorted(final_recommendations, key = lambda x: x[0])  # sort theo khoang cach
    return final_recommendations[:k]



## TEST
# tat ca course cua he thong
courses = [
    Courses(1, "Ly 2", 2, -1, 300, 600, True),
    Courses(2, "Ly 3", 3, -1, 300, 200, True),
    Courses(3, "Hoa 1",  1, 0, 280, 402, False),
    Courses(4, "Sinh 1", 1, -2, 500, 420, False),
    Courses(5, "Toan 1", 1, 1, 600, 500, False),
    Courses(6, "Sinh 2", 2, -2, 600, 100, False),
]

# course dang hoc
current_courses = [courses[0], courses[1]]

if __name__ == "__main__":
    ans = recommend_similar_courses(current_courses, courses, 3)
    for val in ans:
        print((val[0], val[1].course_name))