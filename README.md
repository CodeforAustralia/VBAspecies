**[VBAspecies](https://github.com/CodeforAustralia/VBAspecies) API**
----
**Species**
----
###List all the species

```
 GET /species
```

 Get the information of all species' record in VBA (Victorian Biodiversity Atlas).
 
 **Resource URL:**
```
  https://api.vicbioatlas.com/species
```
**Example request:**

```
curl -X GET \ 
-H "Accept: application/json" \
https://api.vicbioatlas.com/species
```

**Success Response:**

```
HTTP/1.1 200 OK
```  
```json
[
	{
		"_id": "583e19c00640fd08b509c365",
		"PRIMARY_DISCIPLINE": "Terrestrial fauna",
		"SCIENTIFIC_NAME": "Trichosurus vulpecula",
		"COMMON_NAME": "Common Brushtail Possum",
		"SCIENTIFIC_NME_SYNONYM": null,
		"TAXON_ID": "11113"
	},
    {
	    "_id": "5822bf4810262e688aaa95e9",
	    "PRIMARY_DISCIPLINE": "Terrestrial fauna",
	    "SCIENTIFIC_NAME": "Tachyglossus aculeatus",
	    "COMMON_NAME": "Short-beaked Echidna",
	    "SCIENTIFIC_NME_SYNONYM": null,
	    "TAXON_ID": "11003"
    },
    {
	    "_id": "5822bf4110262e688aaa68c1",
	    "PRIMARY_DISCIPLINE": "Flora",
	    "SCIENTIFIC_NAME": "Fuchsia magellanica",
	    "COMMON_NAME": "Fuchsia",
	    "SCIENTIFIC_NME_SYNONYM": "Fuchsia gracilis, Fuchsia riccartonii, Fuchsia magellanica var. macrostemma, Fuchsia macrostemma, Fuchsia magellanica",
	    "TAXON_ID": "503734"
    },
]
```
  **Error Response:**
```
HTTP/1.1 404 OK
```  

```json
{ "error": "Resource not found, please try with a correct resource o parameter value" }
```

###List Species By ID

```
 GET /species/:ID
```

 List the information of a specific species'record on VBA (Victorian Biodiversity Atlas)
 for the specified ID.
 
 
 **Resource URL:**
```
  https://api.vicbioatlas.com/species/:ID
```

  
**Parameters:**

  Name | Type|Required| Description| Example
------------ | -------------| -------------| -------------| -------------
ID | string| Required| Retrieve species information by its ID.| 11113


**Example request:**

```
curl -X GET \ 
-H "Accept: application/json" \
https://api.vicbioatlas.com/species/11113
```

**Success Response:**

```
HTTP/1.1 200 OK
```  
```json
[
	{
		"_id": "583e19c00640fd08b509c365",
		"PRIMARY_DISCIPLINE": "Terrestrial fauna",
		"SCIENTIFIC_NAME": "Trichosurus vulpecula",
		"COMMON_NAME": "Common Brushtail Possum",
		"SCIENTIFIC_NME_SYNONYM": null,
		"TAXON_ID": "11113"
	}
]
```
  **Error Response:**
```
HTTP/1.1 404 OK
```  

```json
{ "error": "Resource not found, please try with a correct resource o parameter value" }
```

###Search operation on species data

```
 GET /species/search
```

 Searching for specific or group of data about species.
 
 
 **Resource URL:**
```
  https://api.vicbioatlas.com/species/search
```
**Parameters:**

  Name | Type|Required| Description| Example
------------ | -------------| -------------| -------------| -------------
scientificName | string| optional| Retrieve species information by its scientific name.| Trichosurus vulpecula
commonName| string| optional| Retrieve species information by its common name.| Common Brushtail Possum
SynonymName|string| optional| Retrieve species information by its common or scientific name synonym.| Galaxias coxii
primaryDiscipline|string| optional| Retrieve species information by its primary discipline.| Terrestrial fauna

**Example request:**

```
curl -X GET \ 
-H "Accept: application/json" \
https://api.vicbioatlas.com/species/search?commonName=Common+Brushtail+Possum
```

**Success Response:**

```
HTTP/1.1 200 OK
```  
```json
[
	{
		"_id": "583e19c00640fd08b509c365",
		"PRIMARY_DISCIPLINE": "Terrestrial fauna",
		"SCIENTIFIC_NAME": "Trichosurus vulpecula",
		"COMMON_NAME": "Common Brushtail Possum",
		"SCIENTIFIC_NME_SYNONYM": null,
		"TAXON_ID": "11113"
	}
]
```
  **Error Response:**
```
HTTP/1.1 404 OK
```  

```json
{ "error": "Resource not found, please try with a correct resource o parameter value" }
```

**Notes:**

* In this API's version you do not require an authenticated user to list the species data.

* At this time it only supports the GET verb and responses are in JSON only.

* At the moment the API is under construction and it is not implemented in a production environment yet,
therefore, if you want to have access to the current development version, you need to replace the host
name *api.vicbioatlas.com* by *54.206.104.145* and you must specify the port number *8080*.
