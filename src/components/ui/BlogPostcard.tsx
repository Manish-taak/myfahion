import React from "react";
import Button from "./Button";
import { cn } from "@/utils/cn";
import { blogpostdata } from "@/interFaces/type";
import Image from "next/image";

/**
 * BlogPostcard component displays a blog post card with an image, date, category button, and description.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.data - Data object containing blog post details.
 * @param {boolean} props.samesize - Indicates if the image should maintain the same size.
 * @param {string} props.navroute - Navigation route for the blog post.
 * @returns {JSX.Element} JSX.Element representing the BlogPostcard component.
 */
const BlogPostcard = ({ data, samesize, navroute }: blogpostdata): JSX.Element => {
  return (
    <> 
      {/* Blog Post Card Container */}
      <div className={`w-full bg-white max-w-[510px] md:px-[20px] md:pt-[20px] md:pb-[30px] p-4 h-full group`}>
        <div className="overflow-hidden">
          {/* Blog Post Image */}
          <Image
            className={cn`group-hover:scale-[1.1] duration-700 ${samesize === true && "md:h-[300px] w-full object-cover"} rounded-[10px]`}
            src={`/images/${data.image}`}
            alt="postcardimage"
            width={477}
            height={400}
          />
        </div>
        {/* Date and Category Section */}
        <div className="flex justify-between pt-[20px] pb-[15px] lg:pt-[30px] lg:pb-[20px]">
          <p className="text-light_primary text_20_16">{data.date}</p>
          {/* Category Button */}
          <div>
            <Button
              className="py-[7px] px-[10px] rounded-[16px] text_13 hover:bg-opacity-5 hover:text-light_primary"
              varient="thirdly"
            >
              Fashion
            </Button>
          </div>
        </div>
        {/* Blog Post Description */}
        <div className="text_34_24 text-blue_gray_800">{data.description}</div>
      </div>
    </>
  );
};

export default BlogPostcard;
