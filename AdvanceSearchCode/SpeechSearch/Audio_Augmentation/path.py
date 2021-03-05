import os
path=[]
for root, dirs, files in os.walk('./Patagonic/'):  
    for fname in files:
        path.append(os.path.join(root, fname))
print(path)