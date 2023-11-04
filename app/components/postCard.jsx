import Link from "next/link";

const PostCard = ({name, submissiion, twitter}) => {
    const excerpt =  submissiion.slice(0,200)
  return (
    <div className="card">
      <p className="card-excerpt">
        {excerpt}...
      </p>
      <Link className="card-name" href="/">
        @{name}
      </Link>
    </div>
  );
};

export default PostCard;
