import os
from turtle import width
import cv2

path=r'C:\Users\Marce\Desktop\tienda-sae\src\img\imgpyton'
listaImg = os.listdir(path)

for i in listaImg:
    img = cv2.imread(path+'\\'+i)
    wh=290  
    resized = cv2.resize(img,(wh,wh))
    cv2.imwrite(path+'\\'+i,resized)
    

