let url
const AboutUs=async()=>{
    url=new URL("/pages/1", process.env.SERVICE_URL)
    let response
    response = await fetch(url.href, {
      method: "GET",
    })
      .then(response =>
        response.json().then(data => ({ status: response.status, body: data }))
      )
      .catch(err => console.log(err))
      return response
}

export const AboutServices={
    AboutUs
}