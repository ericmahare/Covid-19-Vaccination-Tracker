const mockResponse = {
  "Algeria": {
    "All": {
    "administered": 15205854,
    "people_vaccinated": 6851660,
    "people_partially_vaccinated": 8210605,
    "country": "Algeria",
    "population": 41318142,
    "sq_km_area": 2381741,
    "life_expectancy": "69.7",
    "elevation_in_meters": 800,
    "continent": "Africa",
    "abbreviation": "DZ",
    "location": "Northern Africa",
    "iso": 12,
    "capital_city": "Alger",
    "updated": "2022/06/23 00:00:00+00"
    }
    },
    "Angola": {
    "All": {
    "administered": 19486927,
    "people_vaccinated": 6811268,
    "people_partially_vaccinated": 12700926,
    "country": "Angola",
    "population": 29784193,
    "sq_km_area": 1246700,
    "life_expectancy": "38.3",
    "elevation_in_meters": "1,112",
    "continent": "Africa",
    "abbreviation": "AO",
    "location": "Central Africa",
    "iso": 24,
    "capital_city": "Luanda",
    "updated": "2022/06/23 00:00:00+00"
    }
    },
    "Benin": {
    "All": {
    "administered": 4156907,
    "people_vaccinated": 2690085,
    "people_partially_vaccinated": 3638324,
    "country": "Benin",
    "population": 11175692,
    "sq_km_area": 112622,
    "life_expectancy": "50.2",
    "elevation_in_meters": 273,
    "continent": "Africa",
    "abbreviation": "BJ",
    "location": "Western Africa",
    "iso": 204,
    "capital_city": "Porto-Novo",
    "updated": "2022/06/23 00:00:00+00"
    }
    },
    "Botswana": {
    "All": {
    "administered": 2727844,
    "people_vaccinated": 1510940,
    "people_partially_vaccinated": 1695294,
    "country": "Botswana",
    "population": 2291661,
    "sq_km_area": 581730,
    "life_expectancy": "39.3",
    "elevation_in_meters": "1,013",
    "continent": "Africa",
    "abbreviation": "BW",
    "location": "Southern Africa",
    "iso": 72,
    "capital_city": "Gaborone",
    "updated": "2022/06/23 00:00:00+00"
    }
    }
}

export default {
  get: jest.fn().mockReturnValue(mockResponse)
}