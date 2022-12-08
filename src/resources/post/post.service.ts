import postModel from '@/resources/post/post.model';
import Post from '@/resources/post/post.interface';

class PostService {
  private post = postModel;

  /**
   * create a new post
   */
  public async create(title: string, body: string): Promise<Post | void> {
    try {
      const post = await this.post.create({ title, body });
      return post;
    } catch (error) {
      throw new Error('cannot create post');
    }
  }
} // end of class

export default PostService;
