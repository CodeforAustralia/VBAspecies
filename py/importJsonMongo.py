import pymongo
import json

#connection = pymongo.MongoClient("mongodb://localhost") #Local Connection MongoDB
connection = pymongo.MongoClient("mongodb://") #Connection MongoDB
db = connection.heroku_n1n5mr5t #Connection to species DB
collection = db.species #The collection data 
fileJson = './data/SpeciesList.json'

#Deleting the collection before load the data
##delCollection = collection.drop()

print "\nInfo:"
print "MongoDB: " + str(db)
print "Collection: " + str(collection)
print "JSON file: " + str(fileJson)
# Open file with function open()
f = open(str(fileJson), 'r')
#Processing all the rows in JSON File
for row in f:
#Inserting data from jsonFile to DB 
    dic = json.loads(row) #Creating the dictionaries
    collection.insert(dic)
#Closing fileJson
f.close()
print "\nThe data was imported succesfuly!"
