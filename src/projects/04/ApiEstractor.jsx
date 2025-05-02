import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { CiCalendar } from "react-icons/ci";

const ApiEstractor = () => {
  const [testimonials, setTestimonial] = useState("");
  const [items, setItems] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  const handleClick = () => {
    // Function to handle button click
    console.log("Button clicked!");
  };

  return (
    <div className="container text-center flex flex-col justify-center items-center h-[50vh] gap-4">
      <Title text={"Api Estractor"} />
      <div className="flex gap-4">
        <Button
          onClick={() => setTestimonial("posts")}
          className="flex"
          text={"Post"}
          btnClass=""
          icon={<CiCalendar />}
        />
        <Button
          onClick={() => setTestimonial("users")}
          text={"Get Data"}
          btnClass=""
          icon={<CiCalendar />}
        />
        <Button
          onClick={() => setTestimonial("comments")}
          text={"Get Data"}
          btnClass=""
          icon={<CiCalendar />}
        />
      </div>
      <Title
        classes={"text-sm"}
        text={!testimonials ? "select from above" : testimonials}
      />
      {!items
        ? null
        : items.map((item) => {
            return (
              <div key={item.id} className="flex flex-col gap-2">
                {item.name && <h2>{item.name}</h2>}
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <small>{item.email}</small>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default ApiEstractor;
