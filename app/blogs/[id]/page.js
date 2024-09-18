
const page = ({params}) => {
    const {id}=params;
    console.log(id);
    return (
        <div>
            <p>This Blog id is : {id}</p>
        </div>
    );
};

export default page;