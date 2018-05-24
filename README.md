# Customer Support
Your task today is to build the visual interface for a customer support service.

The data for the service can be fetched at https://kea-alt-del.dk/customersupport/

Each item in the array is what I call a "request" in the rest of this document

The endpoint provides one additional parameter you can work with if you like
| Parameter | What it does |
| --- | --- |
| count=10 | sets the amount of returned support requests |

All requests are generated randomly each time data is fetched
## Example
https://kea-alt-del.dk/customersupport/?count=10

### "Required tasks"
The following tasks are "required", meaning you should complete them unless you can come up with better solution than my suggestion

* Each request should be presented in a clear way so that the employees can get a quick overview of the requests
* Each request has an `importance` indicating how quickly the support team should handle the request. I suggest you use color codes to show the importance (red when it's close to 100, green when it's close to 0)
* Each request has a property called `full`
