import React from "react";
import GenericRenderList from "../components/GenericRenderList/GenericChildrenList";
import Card from "../components/Card/Card";

import { useFetch } from "../hooks/useFetch";
import Pannel from "../components/Pannel/Pannel";
import Avatar from "../components/Avatar/Avatar";


const URL_HEROKU = "https://courseshareapi.herokuapp.com"
// const URL_LOCAL = "http://localhost:1337"
export default function Posts() {
  const { status, error, data } = useFetch(URL_HEROKU + "/articles");

  if (error) return <p>Ops. Something went wrong.</p>;
  if (status !== "fetched") return <p>data is loading</p>;
  if (data === null) return <p>still loading</p>;


  function Post({item}) {
    return <Card>
    <div className='row'>
      <div className='col'>
        <img
          style={{ height: "100%" }}
          src={item.image.formats.medium.url}
          alt='featured'
        />
      </div>
      <div className='col pe-4 py-3'>
        <span>{item.users_permissions_user.fullName}</span>
        <Avatar  src={item.users_permissions_user.avatar.formats.thumbnail.url}
          alt='Author' />
        <h1>{item.title}</h1>
        <p>{item.content.slice(0,120)}... <a href="/">read more</a></p>
      </div>
    </div>
  </Card>
  }

  return (
    <div className='container my-3'>
      <div className='row'>
        <div className='col-lg-8'>
         <GenericRenderList  data={data} >
            <Post />
         </GenericRenderList>
        </div>
        <div className='col-lg-4'>
          <Pannel className="sticky">
            <h1>Side Menu</h1>
          </Pannel>
        </div>
      </div>
    </div>
  );
}
