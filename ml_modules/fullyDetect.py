import cv2
import numpy as np
from cvzone.PoseModule import PoseDetector
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/detect-pose', methods=['POST'])
def detect_pose():
    # Receive video source from the request
    video_src = request.json.get('videoSrc')

    # Run pose detection on the provided video source
    pd = PoseDetector()
    pose_data = pd.detectPose(video_src)

    # Process pose data as needed
    # For example, extract relevant information from pose_data

    # Return the processed pose data as JSON response
    return jsonify({'poseData': pose_data}), 200

if __name__ == '__main__':
    app.run(debug=True)

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


def angle(lmlist, p1, p2, p3, p4, p5, p6, drawpoints):
    global counter
    global direction
    global stage

    if len(lmlist) != 0:
        point1 = lmlist[p1]
        point2 = lmlist[p2]
        point3 = lmlist[p3]
        point4 = lmlist[p4]
        point5 = lmlist[p5]
        point6 = lmlist[p6]

        x1, y1 = point1[0], point1[1]
        x2, y2 = point2[0], point2[1]
        x3, y3 = point3[0], point3[1]
        x4, y4 = point4[0], point4[1]
        x5, y5 = point5[0], point5[1]
        x6, y6 = point6[0], point6[1]

        if drawpoints:
            # Draw the points
            cv2.circle(img, (x1, y1), 10, (255, 0, 255), 5)
            cv2.circle(img, (x2, y2), 10, (255, 0, 255), 5)
            cv2.circle(img, (x3, y3), 10, (255, 0, 255), 5)
            cv2.circle(img, (x4, y4), 10, (255, 0, 255), 5)
            cv2.circle(img, (x5, y5), 10, (255, 0, 255), 5)
            cv2.circle(img, (x6, y6), 10, (255, 0, 255), 5)
            

            # Draw the lines
            cv2.line(img, (x1, y1), (x2, y2), (0, 0, 255), 6)
            cv2.line(img, (x2, y2), (x3, y3), (0, 0, 255), 6)
            cv2.line(img, (x1, y1), (x4, y4), (0, 0, 255), 6)
            cv2.line(img, (x4, y4), (x5, y5), (0, 0, 255), 6)
            cv2.line(img, (x5, y5), (x6, y6), (0, 0, 255), 6)



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

    angle(lmList, 11, 13, 15, 12, 14, 16, drawpoints=1)

    
    cv2.imshow('frame', img)
    if cv2.waitKey(10) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
