# import cv2
# import numpy as np
# from cvzone.PoseModule import PoseDetector


# direction = 0
# # Curl counter variables
# counter = 0 
# stage = None

# # cap = cv2.VideoCapture(0)
# # for a video
# cap = cv2.VideoCapture('./../../sample-vid-8.mp4')

# pd = PoseDetector(trackCon=0.70, detectionCon=0.70)



# def angle(lmlist, p1, p2, p3, p4, p5, p6, drawpoints):
#     global counter
#     global direction
#     global stage

#     if len(lmlist) != 0:
#         point1 = lmlist[p1]
#         point2 = lmlist[p2]
#         point3 = lmlist[p3]
#         point4 = lmlist[p4]
#         point5 = lmlist[p5]
#         point6 = lmlist[p6]

#         x1, y1 = point1[0], point1[1]
#         x2, y2 = point2[0], point2[1]
#         x3, y3 = point3[0], point3[1]
#         x4, y4 = point4[0], point4[1]
#         x5, y5 = point5[0], point5[1]
#         x6, y6 = point6[0], point6[1]

#         if drawpoints:
#             # Draw the points
#             cv2.circle(img, (x1, y1), 10, (255, 0, 255), 5)
#             cv2.circle(img, (x2, y2), 10, (255, 0, 255), 5)
#             cv2.circle(img, (x3, y3), 10, (255, 0, 255), 5)
#             cv2.circle(img, (x4, y4), 10, (255, 0, 255), 5)
#             cv2.circle(img, (x5, y5), 10, (255, 0, 255), 5)
#             cv2.circle(img, (x6, y6), 10, (255, 0, 255), 5)
            

#             # Draw the lines
#             cv2.line(img, (x1, y1), (x2, y2), (0, 0, 255), 6)
#             cv2.line(img, (x2, y2), (x3, y3), (0, 0, 255), 6)
#             cv2.line(img, (x1, y1), (x4, y4), (0, 0, 255), 6)
#             cv2.line(img, (x4, y4), (x5, y5), (0, 0, 255), 6)
#             cv2.line(img, (x5, y5), (x6, y6), (0, 0, 255), 6)



# while True:
#     ret, img = cap.read()

#     # if a video is used to play it continuously
#     if not ret:
#         cap = cv2.VideoCapture('./../../sample-vid-8.mp4')
#         continue

#     # Resize the image
#     img = cv2.resize(img, (1000, 800))

#     pd.findPose(img, draw=0)
#     lmList, bbox = pd.findPosition(img, draw=0, bboxWithHands=0)

#     angle(lmList, 11, 13, 15, 12, 14, 16, drawpoints=1)

    
#     cv2.imshow('frame', img)
#     if cv2.waitKey(10) & 0xFF == ord('q'):
#         break

# cap.release()
# cv2.destroyAllWindows()


# import cv2
# from cvzone.PoseModule import PoseDetector
# import sys

# def angle(lmlist, p1, p2, p3, p4, p5, p6, drawpoints):
#     if len(lmlist) != 0:
#         point1 = lmlist[p1]
#         point2 = lmlist[p2]
#         point3 = lmlist[p3]
#         point4 = lmlist[p4]
#         point5 = lmlist[p5]
#         point6 = lmlist[p6]

#         x1, y1 = point1[0], point1[1]
#         x2, y2 = point2[0], point2[1]
#         x3, y3 = point3[0], point3[1]
#         x4, y4 = point4[0], point4[1]
#         x5, y5 = point5[0], point5[1]
#         x6, y6 = point6[0], point6[1]

#         if drawpoints:
#             # Draw the points
#             cv2.circle(img, (x1, y1), 10, (255, 0, 255), 5)
#             cv2.circle(img, (x2, y2), 10, (255, 0, 255), 5)
#             cv2.circle(img, (x3, y3), 10, (255, 0, 255), 5)
#             cv2.circle(img, (x4, y4), 10, (255, 0, 255), 5)
#             cv2.circle(img, (x5, y5), 10, (255, 0, 255), 5)
#             cv2.circle(img, (x6, y6), 10, (255, 0, 255), 5)

#             # Draw the lines
#             cv2.line(img, (x1, y1), (x2, y2), (0, 0, 255), 6)
#             cv2.line(img, (x2, y2), (x3, y3), (0, 0, 255), 6)
#             cv2.line(img, (x1, y1), (x4, y4), (0, 0, 255), 6)
#             cv2.line(img, (x4, y4), (x5, y5), (0, 0, 255), 6)
#             cv2.line(img, (x5, y5), (x6, y6), (0, 0, 255), 6)


# if __name__ == "__main__":
   


#     if len(sys.argv) < 2:
#         print("Error: Video file path not provided.")
#         sys.exit(1)

#     video_file_path = sys.argv[1]
#     print("Video file path:", video_file_path)

    
#     cap = cv2.VideoCapture(video_file_path)
#     pd = PoseDetector(trackCon=0.70, detectionCon=0.70)

#     while True:
#         ret, img = cap.read()

#         if not ret:
#             break

#         img = cv2.resize(img, (1000, 800))
#         pd.findPose(img, draw=0)
#         lmList, bbox = pd.findPosition(img, draw=0, bboxWithHands=0)
#         angle(lmList, 11, 13, 15, 12, 14, 16, drawpoints=1)

#         cv2.imshow('frame', img)
#         if cv2.waitKey(10) & 0xFF == ord('q'):
#             break

#     cap.release()
#     cv2.destroyAllWindows()



import cv2
from cvzone.PoseModule import PoseDetector
import sys

def angle(lmlist, p1, p2, p3, p4, p5, p6, drawpoints):
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

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Error: Video file path not provided.")
        sys.exit(1)

    video_file_path = sys.argv[1]
    print("Video file path:", video_file_path)

    cap = cv2.VideoCapture(video_file_path)
    pd = PoseDetector(trackCon=0.70, detectionCon=0.70)

    # Define the codec and create VideoWriter object
    frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = int(cap.get(cv2.CAP_PROP_FPS))
    out = cv2.VideoWriter('output_video.mp4', cv2.VideoWriter_fourcc(*'mp4v'), fps, (frame_width, frame_height))

    while True:
        ret, img = cap.read()

        if not ret:
            break

        img = cv2.resize(img, (1000, 800))
        pd.findPose(img, draw=0)
        lmList, bbox = pd.findPosition(img, draw=0, bboxWithHands=0)
        angle(lmList, 11, 13, 15, 12, 14, 16, drawpoints=1)

        # Write the frame into the output video
        out.write(img)

        cv2.imshow('frame', img)
        if cv2.waitKey(10) & 0xFF == ord('q'):
            break

    # Release everything if job is finished
    cap.release()
    out.release()
    cv2.destroyAllWindows()

    print("Output video saved as 'output_video.mp4'")
