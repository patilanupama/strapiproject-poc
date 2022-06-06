let url 
const getEvents = async queryParam => {
    url= new URL("events",process.env.SERVICE_URL)
let response

  if (queryParam) {
    url.searchParams.set(queryParam.param, queryParam.value)
  }

  response = await fetch(url.href, {
    method: "GET",
  })
    .then(response =>
      response.json().then(data => ({ status: response.status, body: data }))
    )
    .catch(err => console.log(err))

    if (queryParam) url.searchParams.delete(queryParam.param)
  return response
}

const getEventDetails = async id => {
let response

    url = new URL(`events/${id}`,process.env.SERVICE_URL)  
    response = await fetch(url.href, {
      method: "GET",
    })
      .then(response =>
        response.json().then(data => ({ status: response.status, body: data }))
      )
      .catch(err => console.log(err))
  
      return response
  }

  const getEventCategories = async() => {
    let response
    
        url = new URL("categories",process.env.SERVICE_URL)  
        response = await fetch(url.href, {
          method: "GET",
        })
          .then(response =>
            response.json().then(data => ({ status: response.status, body: data }))
          )
          .catch(err => console.log(err))
          return response
      }
  


export const DashboardServices = {
  getEvents,
  getEventDetails,
  getEventCategories,
}
