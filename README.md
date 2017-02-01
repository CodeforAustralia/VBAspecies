**VBAspecies API**
----
**Introduction**
----
The Victorian Biodiversity Atlas [(VBA)](https://vba.dse.vic.gov.au/) is a tool for government agencies, environmental consultants, researchers and the public to share information about the distribution and abundance of species in Victoria that feeds into the habitat distribution models. It assists DELWP to manage the large volume of species records collected as well as allowing contributors to manage their own records.

###Which species are included?
The VBA encompasses vertebrate and invertebrate animals, fungi, vascular and non-vascular plants from terrestrial and aquatic environments, including marine waters to the three nautical mile statutory limit. It includes both native and naturalised exotic species (including weeds and pests) but is not intended to hold data on cultivated or domesticated species.

**VBAspecies API**
----

VBAspecies API is an application programming interface created from the [VBA web-based information system](https://vba.dse.vic.gov.au/) and [Museums Victoria API](http://collections.museumvictoria.com.au/developers) to provide programmatic access to read and share information about wildlife in Victoria. The API includes species attribute information, including origin and conservation status.

In this API's version you do not require an authenticated user to list the species data.

At this time it only supports the GET verb and responses are in JSON only.

**API How To's**
----
###List All The Species Information

```
 GET /species
```

 Get the information of all species' record in VBA (Victorian Biodiversity Atlas).
 
 **Resource URL:**
```
  https://vbaspecies.herokuapp.com/species
```
**Example Request:**

```
curl -X GET \ 
-H "Accept: application/json" \
https://vbaspecies.herokuapp.com/species
```

**Success Response:**

```
HTTP/1.1 200 OK
```  
```json
[
	{
		"_id": "5873156f9df3d635cf2d3c43",
		"TAXON_ID": "505386",
		"SCIENTIFIC_NAME": "Austrostipa tenuifolia",
		"COMMON_NAME": "Long-awn Spear-grass",
		"PRIMARY_DISCIPLINE": "Flora",
		"ORIGIN": null,
		"TAXON_TYPE": "Monocotyledons",
		"FFG_ACT_STATUS": null,
		"EPBC_ACT_STATUS": null,
		"VIC_ADVISORY_STATUS": "Vulnerable",
		"SCIENTIFIC_NME_SYNONYM": "Austrostipa tenuifolia, Stipa eriopus, Stipa leptophylla, Stipa scabra var. pubescens, Stipa tenuifolia, Stipa scabra var. occidentalis, Stipa incurva",
		"COMMON_NME_SYNONYM": "Long-awn Spear-grass",
		"LAST_MOD": "20100916",
		"EXTRACT_DATE": "20161222"
	},
	{
		"_id": "5873156f9df3d635cf2d3c4a",
		"TAXON_ID": "500341",
		"SCIENTIFIC_NAME": "Avena fatua",
		"COMMON_NAME": "Wild Oat",
		"PRIMARY_DISCIPLINE": "Flora",
		"ORIGIN": "Introduced",
		"TAXON_TYPE": "Monocotyledons",
		"FFG_ACT_STATUS": null,
		"EPBC_ACT_STATUS": null,
		"VIC_ADVISORY_STATUS": null,
		"SCIENTIFIC_NME_SYNONYM": "Avena fatua",
		"COMMON_NME_SYNONYM": "Wild Oat",
		"LAST_MOD": "20100916",
		"EXTRACT_DATE": "20161222"
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
  https://vbaspecies.herokuapp.com/species/:ID
```

  
**Parameters:**

  Name | Type|Required| Description| Example
------------ | -------------| -------------| -------------| -------------
ID | string| Required| Retrieve species information by its ID.| 11113


**Example Request:**

```
curl -X GET \ 
-H "Accept: application/json" \
https://vbaspecies.herokuapp.com/species/11003
```

**Success Response:**

```
HTTP/1.1 200 OK
```  
```json
[
	{
		"_id": "587315779df3d635cf2d73e4",
		"TAXON_ID": "11003",
		"SCIENTIFIC_NAME": "Tachyglossus aculeatus",
		"COMMON_NAME": "Short-beaked Echidna",
		"PRIMARY_DISCIPLINE": "Terrestrial fauna",
		"ORIGIN": null,
		"TAXON_TYPE": "Mammals",
		"FFG_ACT_STATUS": null,
		"EPBC_ACT_STATUS": null,
		"VIC_ADVISORY_STATUS": null,
		"SCIENTIFIC_NME_SYNONYM": null,
		"COMMON_NME_SYNONYM": null,
		"LAST_MOD": "20101202",
		"EXTRACT_DATE": "20161222"
	},
	{
		"generalDescription": "Body rounded and covered in sharp spines, with fur between. Spines yellow-cream with black tips. Smooth tubular snout. Long sharp claws. Body up to 44 cm.",
		"habitat": "Range of areas, including forests.",
		"nationalParks": [],
		"diet": "Insects",
		"briefId": "Spiny mammal with long snout.",
		"endemicity": "Native to Australia"
	},
	{
		"media": [
			{
				"alternativeText": "Short-beaked Echidna on gravel",
				"large": {
					"width": 2819,
					"height": 1879,
					"uri": "http://collections.museumvictoria.com.au/content/media/27/728777-large.jpg",
					"size": 1189258
				},
				"medium": {
					"width": 1500,
					"height": 1000,
					"uri": "http://collections.museumvictoria.com.au/content/media/27/728777-medium.jpg",
					"size": 283994
				},
				"small": {
					"width": 750,
					"height": 500,
					"uri": "http://collections.museumvictoria.com.au/content/media/27/728777-small.jpg",
					"size": 89657
				},
				"thumbnail": {
					"width": 250,
					"height": 250,
					"uri": "http://collections.museumvictoria.com.au/content/media/27/728777-thumbnail.jpg",
					"size": 13419
				},
				"dateModified": "2016-11-10T03:58:00Z",
				"caption": "Short-beaked Echidna, Tachyglossus aculeatus, sitting in a shallow depression in gravel.",
				"creators": [
					"Photographer: Mark Norman"
				],
				"sources": [
					"Museums Victoria"
				],
				"credit": null,
				"rightsStatement": "Copyright Museums Victoria / CC BY",
				"licence": {
					"name": "Attribution 4.0 International",
					"shortName": "CC BY",
					"uri": "https://creativecommons.org/licenses/by/4.0"
				}
			},
			{
				"alternativeText": "A Short-beaked Echidna walking on a sealed road.",
				"large": {
					"width": 1280,
					"height": 906,
					"uri": "http://collections.museumvictoria.com.au/content/media/42/360392-large.jpg",
					"size": 426474
				},
				"medium": {
					"width": 1280,
					"height": 906,
					"uri": "http://collections.museumvictoria.com.au/content/media/42/360392-medium.jpg",
					"size": 322155
				},
				"small": {
					"width": 706,
					"height": 500,
					"uri": "http://collections.museumvictoria.com.au/content/media/42/360392-small.jpg",
					"size": 123568
				},
				"thumbnail": {
					"width": 250,
					"height": 250,
					"uri": "http://collections.museumvictoria.com.au/content/media/42/360392-thumbnail.jpg",
					"size": 16839
				},
				"dateModified": "2015-12-06T02:44:00Z",
				"caption": "Short-beaked Echidna, Tachyglossus aculeatus, sitting in a shallow depression in gravel.",
				"creators": [
					"Photographer: Rudie Kuiter"
				],
				"sources": [
					"Rudie H. Kuiter / Aquatic Photographics"
				],
				"credit": null,
				"rightsStatement": "Copyright Rudie Kuiter / All Rights Reserved",
				"licence": {
					"name": "All Rights Reserved",
					"shortName": "All Rights Reserved",
					"uri": ""
				}
			},
			{
				"alternativeText": "A Short-beaked Echidna, photographed head on.",
				"large": {
					"width": 2000,
					"height": 1333,
					"uri": "http://collections.museumvictoria.com.au/content/media/40/360390-large.jpg",
					"size": 611633
				},
				"medium": {
					"width": 1500,
					"height": 1000,
					"uri": "http://collections.museumvictoria.com.au/content/media/40/360390-medium.jpg",
					"size": 258560
				},
				"small": {
					"width": 750,
					"height": 500,
					"uri": "http://collections.museumvictoria.com.au/content/media/40/360390-small.jpg",
					"size": 87863
				},
				"thumbnail": {
					"width": 250,
					"height": 250,
					"uri": "http://collections.museumvictoria.com.au/content/media/40/360390-thumbnail.jpg",
					"size": 14291
				},
				"dateModified": "2016-08-22T00:07:00Z",
				"caption": "Short-beaked Echidna, Tachyglossus aculeatus.",
				"creators": [],
				"sources": [
					"flagstaffotos.com.au"
				],
				"credit": null,
				"rightsStatement": "Copyright flagstaffotos.com.au / All Rights Reserved",
				"licence": {
					"name": "All Rights Reserved",
					"shortName": "All Rights Reserved",
					"uri": ""
				}
			},
			{
				"alternativeText": "A baby Short-beaked Echidna (a 'puggle'), held in the palm of someone's hand.",
				"large": {
					"width": 3000,
					"height": 2025,
					"uri": "http://collections.museumvictoria.com.au/content/media/41/360391-large.jpg",
					"size": 948676
				},
				"medium": {
					"width": 1500,
					"height": 1013,
					"uri": "http://collections.museumvictoria.com.au/content/media/41/360391-medium.jpg",
					"size": 250239
				},
				"small": {
					"width": 741,
					"height": 500,
					"uri": "http://collections.museumvictoria.com.au/content/media/41/360391-small.jpg",
					"size": 74689
				},
				"thumbnail": {
					"width": 250,
					"height": 250,
					"uri": "http://collections.museumvictoria.com.au/content/media/41/360391-thumbnail.jpg",
					"size": 11829
				},
				"dateModified": "2016-11-10T03:58:00Z",
				"caption": "Short-beaked Echidna, Tachyglossus aculeatus, baby (called a 'puggle').",
				"creators": [
					"Photographer: Ian R McCann"
				],
				"sources": [
					"Museums Victoria"
				],
				"credit": null,
				"rightsStatement": "Copyright Museums Victoria / CC BY",
				"licence": {
					"name": "Attribution 4.0 International",
					"shortName": "CC BY",
					"uri": "https://creativecommons.org/licenses/by/4.0"
				}
			}
		]
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

###Search Operation On Species Data

```
 GET /species/search
```

 Searching for specific or group of data about species.
 
 
 **Resource URL:**
```
  https://vbaspecies.herokuapp.com/species/search
```
**Parameters:**

  Name | Type|Required| Description| Example
------------ | -------------| -------------| -------------| -------------
q | string| optional| General search. Retrieve species information by its *scientificName* or *commonName* or *synonymName* or *primaryDiscipline* or *taxonID* or *scientificNameSynonym* or *origin* or *taxonType* or *commonNameSynonym*.| Trichosurus vulpecula
scientificName | string| optional| Retrieve species information by its scientific name.| Trichosurus vulpecula
commonName| string| optional| Retrieve species information by its common name.| Common Brushtail Possum
synonymName|string| optional| Retrieve species information by its common or scientific name synonym.| Galaxias coxii
primaryDiscipline|string| optional| Retrieve species information by its primary discipline.| Terrestrial fauna

**Example Request:**

```
curl -X GET \ 
-H "Accept: application/json" \
https://vbaspecies.herokuapp.com/species/search?commonName=Short-beaked+Echidna
```

**Success Response:**

```
HTTP/1.1 200 OK
```  
```json
[
	{
		"_id": "587315779df3d635cf2d73e4",
		"TAXON_ID": "11003",
		"SCIENTIFIC_NAME": "Tachyglossus aculeatus",
		"COMMON_NAME": "Short-beaked Echidna",
		"PRIMARY_DISCIPLINE": "Terrestrial fauna",
		"ORIGIN": null,
		"TAXON_TYPE": "Mammals",
		"FFG_ACT_STATUS": null,
		"EPBC_ACT_STATUS": null,
		"VIC_ADVISORY_STATUS": null,
		"SCIENTIFIC_NME_SYNONYM": null,
		"COMMON_NME_SYNONYM": null,
		"LAST_MOD": "20101202",
		"EXTRACT_DATE": "20161222"
	},
	{
		"generalDescription": "Body rounded and covered in sharp spines, with fur between. Spines yellow-cream with black tips. Smooth tubular snout. Long sharp claws. Body up to 44 cm.",
		"habitat": "Range of areas, including forests.",
		"nationalParks": [],
		"diet": "Insects",
		"briefId": "Spiny mammal with long snout.",
		"endemicity": "Native to Australia"
	},
	{
		"media": [
			{
				"alternativeText": "Short-beaked Echidna on gravel",
				"large": {
					"width": 2819,
					"height": 1879,
					"uri": "http://collections.museumvictoria.com.au/content/media/27/728777-large.jpg",
					"size": 1189258
				},
				"medium": {
					"width": 1500,
					"height": 1000,
					"uri": "http://collections.museumvictoria.com.au/content/media/27/728777-medium.jpg",
					"size": 283994
				},
				"small": {
					"width": 750,
					"height": 500,
					"uri": "http://collections.museumvictoria.com.au/content/media/27/728777-small.jpg",
					"size": 89657
				},
				"thumbnail": {
					"width": 250,
					"height": 250,
					"uri": "http://collections.museumvictoria.com.au/content/media/27/728777-thumbnail.jpg",
					"size": 13419
				},
				"dateModified": "2016-11-10T03:58:00Z",
				"caption": "Short-beaked Echidna, Tachyglossus aculeatus, sitting in a shallow depression in gravel.",
				"creators": [
					"Photographer: Mark Norman"
				],
				"sources": [
					"Museums Victoria"
				],
				"credit": null,
				"rightsStatement": "Copyright Museums Victoria / CC BY",
				"licence": {
					"name": "Attribution 4.0 International",
					"shortName": "CC BY",
					"uri": "https://creativecommons.org/licenses/by/4.0"
				}
			},
			{
				"alternativeText": "A Short-beaked Echidna walking on a sealed road.",
				"large": {
					"width": 1280,
					"height": 906,
					"uri": "http://collections.museumvictoria.com.au/content/media/42/360392-large.jpg",
					"size": 426474
				},
				"medium": {
					"width": 1280,
					"height": 906,
					"uri": "http://collections.museumvictoria.com.au/content/media/42/360392-medium.jpg",
					"size": 322155
				},
				"small": {
					"width": 706,
					"height": 500,
					"uri": "http://collections.museumvictoria.com.au/content/media/42/360392-small.jpg",
					"size": 123568
				},
				"thumbnail": {
					"width": 250,
					"height": 250,
					"uri": "http://collections.museumvictoria.com.au/content/media/42/360392-thumbnail.jpg",
					"size": 16839
				},
				"dateModified": "2015-12-06T02:44:00Z",
				"caption": "Short-beaked Echidna, Tachyglossus aculeatus, sitting in a shallow depression in gravel.",
				"creators": [
					"Photographer: Rudie Kuiter"
				],
				"sources": [
					"Rudie H. Kuiter / Aquatic Photographics"
				],
				"credit": null,
				"rightsStatement": "Copyright Rudie Kuiter / All Rights Reserved",
				"licence": {
					"name": "All Rights Reserved",
					"shortName": "All Rights Reserved",
					"uri": ""
				}
			},
			{
				"alternativeText": "A Short-beaked Echidna, photographed head on.",
				"large": {
					"width": 2000,
					"height": 1333,
					"uri": "http://collections.museumvictoria.com.au/content/media/40/360390-large.jpg",
					"size": 611633
				},
				"medium": {
					"width": 1500,
					"height": 1000,
					"uri": "http://collections.museumvictoria.com.au/content/media/40/360390-medium.jpg",
					"size": 258560
				},
				"small": {
					"width": 750,
					"height": 500,
					"uri": "http://collections.museumvictoria.com.au/content/media/40/360390-small.jpg",
					"size": 87863
				},
				"thumbnail": {
					"width": 250,
					"height": 250,
					"uri": "http://collections.museumvictoria.com.au/content/media/40/360390-thumbnail.jpg",
					"size": 14291
				},
				"dateModified": "2016-08-22T00:07:00Z",
				"caption": "Short-beaked Echidna, Tachyglossus aculeatus.",
				"creators": [],
				"sources": [
					"flagstaffotos.com.au"
				],
				"credit": null,
				"rightsStatement": "Copyright flagstaffotos.com.au / All Rights Reserved",
				"licence": {
					"name": "All Rights Reserved",
					"shortName": "All Rights Reserved",
					"uri": ""
				}
			},
			{
				"alternativeText": "A baby Short-beaked Echidna (a 'puggle'), held in the palm of someone's hand.",
				"large": {
					"width": 3000,
					"height": 2025,
					"uri": "http://collections.museumvictoria.com.au/content/media/41/360391-large.jpg",
					"size": 948676
				},
				"medium": {
					"width": 1500,
					"height": 1013,
					"uri": "http://collections.museumvictoria.com.au/content/media/41/360391-medium.jpg",
					"size": 250239
				},
				"small": {
					"width": 741,
					"height": 500,
					"uri": "http://collections.museumvictoria.com.au/content/media/41/360391-small.jpg",
					"size": 74689
				},
				"thumbnail": {
					"width": 250,
					"height": 250,
					"uri": "http://collections.museumvictoria.com.au/content/media/41/360391-thumbnail.jpg",
					"size": 11829
				},
				"dateModified": "2016-11-10T03:58:00Z",
				"caption": "Short-beaked Echidna, Tachyglossus aculeatus, baby (called a 'puggle').",
				"creators": [
					"Photographer: Ian R McCann"
				],
				"sources": [
					"Museums Victoria"
				],
				"credit": null,
				"rightsStatement": "Copyright Museums Victoria / CC BY",
				"licence": {
					"name": "Attribution 4.0 International",
					"shortName": "CC BY",
					"uri": "https://creativecommons.org/licenses/by/4.0"
				}
			}
		]
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

