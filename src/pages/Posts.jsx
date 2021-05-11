import React from "react";
import GenericRenderList from "../components/GenericRenderList/GenericChildrenList";
import Card from "../components/Card/Card";
import { useFetch } from "../hooks/useFetch";
import Pannel from "../components/Pannel/Pannel";

export default function Posts() {
  const { status, error, data } = useFetch("http://localhost:1337/articles");
  
  if (status !== "fetched") return <p>data is loading</p>;

  return (
    <div className='container my-3'>
      <div className='row'>
        <div className='col-lg-8'>
          <GenericRenderList
            data={data}
            render={(item) => (
              <Card key={item.id}>
                <div className='row'>
                  <div className='col'>
                    <img style={{height: '100%'}} src={item.image.formats.thumbnail.url} alt='avatar' fluid />
                  </div>
                  <div className='col pe-4 py-3'>
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                  </div>
                </div>
              </Card>
            )}
          />
        </div>
        <div className='col-lg-4'>
          <Pannel>
            <h1>Side Menu</h1>
          </Pannel>
        </div>
      </div>
    </div>
  );
}