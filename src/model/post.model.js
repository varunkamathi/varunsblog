import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        'https://www://www.google.com/imgres?q=%27https%3A%2F%2Fwww.hostinger.com%2Ftutorials%2Fwp-content%2Fuploads%2Fsites%2F2%2F2021%2F09%2Fhow-to-write-a-blog-post.png%27%2C&imgurl=https%3A%2F%2Fwww.hostinger.com%2Ftutorials%2Fwp-content%2Fuploads%2Fsites%2F2%2F2021%2F09%2Fhow-to-write-a-blog-post.png&imgrefurl=https%3A%2F%2Fwww.hostinger.in%2Ftutorials%2Fhow-to-write-a-blog-post&docid=GvPTI8RBxMLIUM&tbnid=vDskZxs20MpSoM&vet=12ahUKEwjrs8Pj8KKLAxWibfUHHflQAAQQM3oECBMQAA..i&w=2127&h=934&hcb=2&ved=2ahUKEwjrs8Pj8KKLAxWibfUHHflQAAQQM3oECBMQAA.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;