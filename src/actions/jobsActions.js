import axios from "axios";

import API_ROUTE from "../const/param";

export function addJob(data, callback, errorcallback){

    axios.post(`${API_ROUTE}api/jobs/add`, 
    {
        "author" : data.author,
        "company" : data.company,
        "position": data.position,
        "stack": data.stack,
        "link": data.link,
        "contact": data.contact,
        "description": data.description,
        "comment": data.comment,
        "status": data.status,
    }
    )
    .then(response => {
      //do something
      console.log(response)
      if(response.status === 200){
        callback(response.data);
      }
    })
    .catch(err => {
      // catch error
      console.log(err)
    })
  }

  export function getJobs(data, callback, errorcallback){
    axios.get(`${API_ROUTE}api/jobs`, 
    {
        params : {
          author : data.id
        }
    }
    )
    .then(response => {
      //do something
      if(response.status === 200){
        callback(response.data);
      }
    })
    .catch(err => {
      // catch error
      console.log(err)
    })
  }
  