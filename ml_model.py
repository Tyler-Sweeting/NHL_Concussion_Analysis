
# Import libraries
import pandas as pd
import pickle
import os
import sys
import csv
import json
from pathlib import Path
from sklearn import preprocessing
from sklearn.metrics import confusion_matrix, recall_score, precision_score, accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Define directories for reading and saving files
# get the current directory
path = os.path.abspath(os.path.dirname(sys.argv[0]))
path_file = Path(path)  # use path library so it can be used in MAC and Windows
print(path_file)


# Trainnig a random forest algorithm
def train_rf(X_train, X_test, y_train, y_test, element):
    # Initialize model
    rf = RandomForestClassifier(n_estimators=1000, random_state=42)
    # Train the model on training data
    model_rf = rf.fit(X_train, y_train)
    print(element + " Model Training Ready")
    # Use the forest's predict method on the test data
    predictions = rf.predict(X_test)
    print(element + ' Accuracy Condition: %.2f%%' %
          (accuracy_score(predictions, y_test)*100))
    return (model_rf)


# Trainnig a random forest algorithm
def train_rf(X_train, X_test, y_train, y_test, element):
    # Initialize model
    rf = RandomForestClassifier(n_estimators=1000, random_state=42)
    # Train the model on training data
    model_rf = rf.fit(X_train, y_train)
    print(element + " Model Training Ready")
    # Use the forest's predict method on the test data
    predictions = rf.predict(X_test)
    print(element + ' Accuracy Condition: %.2f%%' %
          (accuracy_score(predictions, y_test)*100))
    return (model_rf)

# Save model as objects
def save_model_object(model_object, model_name, model_params):
    file_name = model_name+"_"+str(model_params).replace(
        '[', "").replace(']', "").replace(',', "_").replace(' ', "_")+".obj"
    with open(file_name, 'wb') as handle:
        try:
            pickle.dump(model_object, handle)
        except:
            print("ERROR")
    print(file_name, " saved successfully")
    
    
    
    
    # Save file
save_path = path_file / "ml_model"/ 'feature_hs.csv'
# final_data.to_csv(save_path, index = None, header=True)
# print ("Features file saved 100%")


 # ***************************************************************************************
# MACHINE LEARNING ALGORITHM IMPLEMENTATION
