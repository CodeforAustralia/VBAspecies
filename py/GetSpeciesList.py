import json
import pandas
import urllib

urlGetFile = 'https://vba.dse.vic.gov.au/vba/downloadVSC.do'
cvsFile = './data/SpeciesList.csv'
jsonfile = './data/SpeciesList.json'

SpeciesListFile = urllib.URLopener()
SpeciesListFile.retrieve(urlGetFile, cvsFile) 

data = pandas.read_csv(cvsFile, usecols=[0,1,2,4,17])
json_file = open(jsonfile, 'w')

for line in data.iterrows():
    line[1].to_json(json_file)
    json_file.write('\n')
