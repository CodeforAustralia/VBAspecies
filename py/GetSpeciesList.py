import json
import pandas
import urllib

urlGetFile = 'https://vba.dse.vic.gov.au/vba/downloadVSC.do'
cvsFile = './data/SpeciesList.csv'
jsonfile = './data/SpeciesList.json'

SpeciesListFile = urllib.URLopener()
SpeciesListFile.retrieve(urlGetFile, cvsFile) 

data = pandas.read_csv(cvsFile, usecols=['TAXON_ID','SCIENTIFIC_NAME','COMMON_NAME','TAXON_TYPE','PRIMARY_DISCIPLINE','SCIENTIFIC_NME_SYNONYM','ORIGIN','NVIS_GROWTHFORM','FFG_ACT_STATUS','EPBC_ACT_STATUS','VIC_ADVISORY_STATUS','COMMON_NME_SYNONYM'],  dtype=object)
json_file = open(jsonfile, 'w')

for line in data.iterrows():
    line[1].to_json(json_file)
    json_file.write('\n')
