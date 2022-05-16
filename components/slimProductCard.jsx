import { useRouter } from "next/router";
import React, { useEffect } from "react";

function SlimProductCard(props) {
  let obj = {};
  if (true) {
    obj = {
      title: "Title of Card",
      img: "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg?resize=696,463",
      description: "This is a crrd that you will use to actually display the descriptions of these cards hahahahahahah"
        
    };
  } else {
    obj = props;
  }

  const router = useRouter();
  return (
    <div className="">
        <div className="text-center flex-none hover:scale-105 transition filter drop-shadow-md hover:drop-shadow-xl max-w-[250px] bg-white rounded-lg border-2 border-black mx-3 my-5">
          <div className="">
            <img src={obj.img} className="w-full rounded-tr-lg rounded-tl-lg h-[100%]" />
          </div>
          <div className="px-3 py-2">
            <div className="text-xl font-semibold">{obj.title}</div>
            <div>
                {obj.description}
            </div>
          </div>
        </div>
    </div>
  );
}

export default SlimProductCard;
