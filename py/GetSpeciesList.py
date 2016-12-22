import json
import pandas as pd
import urllib

urlGetFile = 'https://vba.dse.vic.gov.au/vba/downloadVSC.do'
cvsFile = './data/SpeciesList.csv'
jsonfile = './data/SpeciesList.json'

SpeciesListFile = urllib.URLopener()
SpeciesListFile.retrieve(urlGetFile, cvsFile) 

data = pd.read_csv(cvsFile, usecols=['TAXON_ID','SCIENTIFIC_NAME','COMMON_NAME','TAXON_TYPE','PRIMARY_DISCIPLINE','SCIENTIFIC_NME_SYNONYM','ORIGIN','FFG_ACT_STATUS','EPBC_ACT_STATUS','VIC_ADVISORY_STATUS','COMMON_NME_SYNONYM', 'LAST_MOD','EXTRACT_DATE'],  dtype=object)

#data['EXTRACT_DATE'] = data['EXTRACT_DATE'].str.replace('/','')
data['EXTRACT_DATE'] = data['EXTRACT_DATE'].str[6:10] + data['EXTRACT_DATE'].str[3:5] + data['EXTRACT_DATE'].str[0:2]

print data.head(n=5)

json_file = open(jsonfile, 'w')

for line in data.iterrows():
    line[1].to_json(json_file)
    json_file.write('\n')
