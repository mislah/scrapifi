const schemas = [
    {
        "host": "www.bayut.com",
        "schema": {
            "price": "[aria-label=\"Price\"]",
            "location": "[aria-label=\"Property header\"]",
            "area": "[aria-label=\"Area\"]",
            "date": "[aria-label=\"Reactivated date\"]"
        },
        "rules": {
            "gen-location": (data) => {
                let tmp = data.location.split(',');
                return {
                    "city": tmp.slice(-1)[0].trim(),
                    "address": tmp.slice(0, -2).join(", ").trim(),
                    "locality": tmp.slice(-2)[0].trim()
                }
            }
        }
    }
]