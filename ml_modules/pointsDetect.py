import cv2
import numpy as np
from cvzone.PoseModule import PoseDetector

direction = 0
# Curl counter variables
counter = 0 
stage = None

# cap = cv2.VideoCapture(0)
# for a video
cap = cv2.VideoCapture('./../../sample-vid-8.mp4')

pd = PoseDetector(trackCon=0.70, detectionCon=0.70)


def calculate_angle(a, b, c):
    a = np.array(a)  # First
    b = np.array(b)  # Mid
    c = np.array(c)  # End
    
    radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
    angle = np.abs(radians * 180.0 / np.pi)
    
    if angle > 180.0:
        angle = 360 - angle
        
    return angle


def angle(lmlist, points,side, drawpoints):
    global counter
    global direction
    global stage

    if len(lmlist) != 0:
        point_indices = points
        points = [lmlist[i] for i in point_indices]

        print(points)

        if drawpoints:
            for point in points:
                cv2.circle(img, (point[0], point[1]), 10, (255, 0, 255), 5)

            for i in range(len(points)-1):
                cv2.line(img, (points[i][0], points[i][1]), (points[i+1][0], points[i+1][1]), (0, 0, 255), 6)

            # Calculate midpoint
                midpoint_x = (points[i][0] + points[i+1][0]) // 2
                midpoint_y = (points[i][1] + points[i+1][1]) // 2

            
            angles = [calculate_angle(points[i-1], points[i], points[i+1]) for i in range(1, len(points)-1)]
            for i, ang in enumerate(angles):
                if side == 13:
                    cv2.putText(img, f"Right Elbow Angle: {ang:.2f}", (midpoint_x, midpoint_y), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2)
                elif side == 14:
                    cv2.putText(img, f"Left Elbow Angle: {ang:.2f}", (midpoint_x, midpoint_y), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2)






           

           
#         #    # Curl counter logic
#         #     if left_angle > 100:
#         #         stage = "right_start"
#         #         print("Condition 1:", stage)
#         #     if left_angle < 90 and stage == 'right_start':
#         #         stage = "right_finish"
#         #         print("Condition 2:", stage)
#         #     if right_angle < 80 and stage == 'right_finish':
#         #         stage = "left_start"
#         #         print("Condition 3:", stage)
#         #     if right_angle > 100 and stage == 'left_start':
#         #         stage = "left_finish"
#         #         print("Condition 4:", stage)
#         #         counter += 1
#         #         print("Counter:", counter)
            
#             # Curl counter logic
#             if right_angle > 100:
#                 stage = "right_start"
#             if right_angle <= 80 and stage == 'right_start':
#                 stage = "right_finish" 
#             if left_angle <= 100 and stage == 'right_finish':
#                 stage = "left_start"
#             if left_angle > 125 and stage == 'left_start':
#                 stage = "left_finish"
#                 counter += 1
#                 print(counter)




while True:
    ret, img = cap.read()

    # if a video is used to play it continuously
    if not ret:
        cap = cv2.VideoCapture('./../../sample-vid-8.mp4')
        continue

    # Resize the image
    img = cv2.resize(img, (1000, 800))

    pd.findPose(img, draw=0)
    lmList, bbox = pd.findPosition(img, draw=0, bboxWithHands=0)

    right_elbow_points = [11, 13, 15]
    left_elbow_points = [12, 14, 16]

    angle(lmList, right_elbow_points, right_elbow_points[1], drawpoints=1)
    angle(lmList, left_elbow_points, left_elbow_points[1], drawpoints=1)

    
    cv2.imshow('frame', img)
    if cv2.waitKey(10) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
