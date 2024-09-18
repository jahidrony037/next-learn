import Link from "next/link";

const Blogs = () => {
    const blogs = [
        {
            id:1,
            title:"This is Blog 1",
            description: "Blog description one"
        },
        {
            id:2,
            title:"This is Blog 2",
            description: "Blog description two"
        },
        {
            id:3,
            title:"This is Blog 3",
            description: "Blog description three"
        },
    ]
    return (
        <div>
            <p className="text-center text-[24px] font-bold">All Blogs</p>
            <div className="mt-5">
                <ul>
                {
                    blogs.map(blog=> <li key={blog?.id}><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li> )
                }
                </ul>
            </div>
        </div>
    );
};

export default Blogs;